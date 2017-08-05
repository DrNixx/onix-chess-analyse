import { intVal } from 'onix-core';
import { AnalysisJudgment } from "./AnalysisJudgment";

export class AnalysisItem {
    public ply: number;

    public move: string;

    public eval?: number;

    public ceil?: number;

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
        if (!this.eval) {
            this.eval = prev;
        }

        this.ceil = this.eval;
        if (this.ceil > 1000) {
            this.ceil = 1000;
        }

        if (this.ceil < -1000) {
            this.ceil = -1000;
        }

        this.turn = intVal(1 + (this.ply - 1) / 2);
        const color = this.ply % 2 == 1;
        this.name = "" + this.turn + (color ? ". " : "... ") + this.move;
    }

    public advise(next: number|null) {
        if (next === null) {
            this.advantage = this.ceil / 100;
        } else {
            this.advantage = next;
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