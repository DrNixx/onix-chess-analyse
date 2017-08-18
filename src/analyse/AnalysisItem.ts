import toSafeInteger = require('lodash/toSafeInteger');
import { sprintf, Intl as IntlCore } from 'onix-core';
import { Color, Chess as Engine } from 'onix-chess';
import { AnalysisJudgment } from "./AnalysisJudgment";

export class AnalysisItem {
    public ply: number;

    public move: string;

    /**
     * Position eval before move (centipawn)
     */
    public eval?: number;

    /**
     * Ceiled position eval before move (centipawn)
     */
    public ceil?: number;

    /**
     * Ceiled position eval before move (pawn)
     */
    public ceilPawn?: number;

    /**
     * Position eval after move
     */
    public advantage?: number;

    public mate?: number;
    
    public best?: string;

    public variation?: string;

    public judgment?: AnalysisJudgment;

    public depth?: number;

    public time?: number;

    public color?: boolean;

    public turn?: number;

    public name?: string;

    public desc?: string;

    public constructor(raw?, ply?: number) {
        if (raw) {
            this.ply = raw.ply || ply || 0;
            this.move = raw.move;
            this.eval = raw.eval;
            if (!this.eval && (this.eval !== 0)) {
                this.eval = null;
            }
            
            this.mate = raw.mate;
            if (!this.mate && (this.mate !== 0)) {
                this.mate = null;
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

    public normalize(prev: number) {
        if (this.eval === null) {
            this.eval = prev;
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
        const color = this.ply ? Engine.plyToColor(this.ply) : Color.NoColor;
        this.name = "" + this.turn + (color === Color.White ? ". " : "... ") + this.move;
    }

    public extend(next: AnalysisItem|null) {
        if (next !== null) {
            this.advantage = next.ceilPawn; 
        }

        this.desc = "";

        if (this.mate !== null) {
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