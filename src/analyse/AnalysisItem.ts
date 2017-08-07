import { intVal } from 'onix-core';
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

    public constructor(raw) {
        this.ply = raw.ply;
        this.move = raw.move;
        this.eval = raw.eval;
        this.mate = raw.mate;
        this.best = raw.best;
        this.variation = raw.variation;
        this.depth = raw.depth;
        this.time = raw.time;

        if (raw.judgment) {
            this.judgment = new AnalysisJudgment(raw.judgment);
        }
    }

    public normalize(prev: number) {
        if (!this.eval && (this.eval !== 0)) {
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

        this.turn = intVal(1 + (this.ply - 1) / 2);
        const color = this.ply % 2 == 1;
        this.name = "" + this.turn + (color ? ". " : "... ") + this.move;
    }

    public extend(next: AnalysisItem|null) {
        if (next !== null) {
            this.advantage = next.ceilPawn; 
        }

        this.desc = "";

        if (this.mate) {
            this.desc = "Mate in #" + this.mate;
        } else {
            this.desc = (this.advantage > 0) ? "+" : "";
            this.desc += this.advantage;
        }
    }
}