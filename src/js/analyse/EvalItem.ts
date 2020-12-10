import { _, sprintf } from 'onix-core';
import { Color, Chess as Engine, Colors, ITreePart, IJudgment, IGlyph } from 'onix-chess';
import { register as i18nRegister } from '../i18n';


export class EvalItem {

    public ply: number = 0;

    public color?: Colors.BW;

    public san: string = "";

    /**
     * Position eval before move (centipawn)
     */
    public cp?: number;

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

    public depth?: number;

    public time?: number;

    public turn?: number;

    public name?: string;

    public desc?: string;

    public judgment?: IJudgment[];

    public glyphs?: IGlyph[];

    public constructor(data?: ITreePart) {
        i18nRegister();
        
        if (data) {
            this.ply = data.ply;
            this.color = Engine.plyToColor(this.ply);
            this.san = data.san!;
            if (data.eval) {
                this.cp = data.eval.cp;
                if (!this.cp && (this.cp !== 0)) {
                    this.cp = undefined;
                }

                this.mate = data.eval.mate;
                if (!this.mate && (this.mate !== 0)) {
                    this.mate = undefined;
                }

                this.best = data.eval.best;
                this.variation = data.eval.variation;
                this.depth = data.eval.depth;
                this.time = data.eval.time;
            }
    
            if (data.comments) {
                this.judgment = data.comments;
            }

            if (data.glyphs) {
                this.glyphs = data.glyphs;
            }
        }
    }

    public normalize(prev: EvalItem) {
        if (this.cp === undefined) {
            if (this.mate !== undefined) {
                this.cp = Math.sign(this.mate) * 1000;
            } else {
                this.cp = prev.cp ?? 0;
            }
            
        }

        this.ceil = this.cp;
        if (this.ceil > 1000) {
            this.ceil = 1000;
        }

        if (this.ceil < -1000) {
            this.ceil = -1000;
        }
        

        this.ceilPawn = this.ceil / 100;
        this.advantage = this.ceilPawn;

        this.turn = this.ply ? Engine.plyToTurn(this.ply) : 0;
        this.name = "" + this.turn + (this.color === Color.White ? ". " : "... ") + this.san;
    }

    public extend(next: EvalItem) {
        this.advantage = next.ceilPawn; 

        this.desc = "";

        if (this.mate !== undefined) {
            if (this.mate !== 0) {
                const fmt = _("analyse", "mateIn");
                this.desc = sprintf(fmt, this.mate);
            }
        } else {
            this.desc = (this.advantage > 0) ? "+" : "";
            this.desc += this.advantage;
        }
    }
}