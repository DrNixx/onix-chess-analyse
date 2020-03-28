import { sprintf, Intl as IntlCore } from 'onix-core';
import { Color, Chess as Engine, Colors } from 'onix-chess';
import { AnalysisJudgment } from "./AnalysisJudgment";

export class AnalysisItem {
    public ply: number = 0;

    public move: string = "";

    /**
     * Position eval before move (centipawn)
     */
    public eval?: number;

    /**
     * Ceiled position eval before move (centipawn)
     */
    public ceil: number = 0;

    /**
     * Ceiled position eval before move (pawn)
     */
    public ceilPawn: number = 0;

    /**
     * Position eval after move
     */
    public advantage: number = 0;

    public mate?: number = undefined;
    
    public best?: string;

    public variation?: string;

    public judgment?: AnalysisJudgment;

    public depth?: number;

    public time?: number;

    public color?: Colors.BW;

    public turn?: number;

    public name?: string;

    public desc?: string;

    public constructor(raw?: any, ply?: number) {
        if (raw) {
            this.ply = raw.ply || ply || 0;
            this.color = Engine.plyToColor(this.ply);
            this.move = raw.move;
            this.eval = raw.eval;
            if (!this.eval && (this.eval !== 0)) {
                this.eval = undefined;
            }
            
            this.mate = raw.mate;
            if (!this.mate && (this.mate !== 0)) {
                this.mate = undefined;
            }
    
            this.best = raw.best;
            this.variation = raw.variation;
            this.depth = raw.depth;
            this.time = raw.time;
    
            if (raw.judgment) {
                this.judgment = new AnalysisJudgment(raw.judgment);
            }
        }
    }

    public normalize(prev: number | undefined) {
        if (this.eval === undefined) {
            if (this.mate !== undefined) {
                this.eval = Math.sign(this.mate) * 1000;
            } else {
                this.eval = prev || 0;
            }
            
        }

        this.ceil = this.eval;
        if (this.ceil > 1000) {
            this.ceil = 1000;
        }

        if (this.ceil < -1000) {
            this.ceil = -1000;
        }
        

        this.ceilPawn = this.ceil / 100;
        this.advantage = this.ceilPawn;

        this.turn = this.ply ? Engine.plyToTurn(this.ply) : 0;
        this.name = "" + this.turn + (this.color === Color.White ? ". " : "... ") + this.move;
    }

    public extend(next: AnalysisItem|null) {
        if (next !== null) {
            this.advantage = next.ceilPawn; 
        }

        this.desc = "";

        if (this.mate !== undefined) {
            if (this.mate !== 0) {
                const fmt = IntlCore.t("analyse", "mateIn");
                this.desc = sprintf(fmt, this.mate);
            }
        } else {
            this.desc = (this.advantage > 0) ? "+" : "";
            this.desc += this.advantage;
        }
    }
}