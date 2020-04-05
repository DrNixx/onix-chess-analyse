import toSafeInteger from 'lodash-es/toSafeInteger';
import { AnalysisItem } from './AnalysisItem';
import { register } from '../i18n';
import { IUserAnalysis } from './IUserAnalysis';
import { Colors } from 'onix-chess';

export class AnalysisResult {
    public state: string = "empty";

    public completed: number = 0;

    public white: IUserAnalysis = {
                    blunder: 0,
                    mistake: 0,
                    inaccuracy: 0,
                    acpl: 0,
                };

    public black: IUserAnalysis = {
                    blunder: 0,
                    mistake: 0,
                    inaccuracy: 0,
                    acpl: 0,
                };

    public analysis: AnalysisItem[] = [];

    public constructor(raw?: any) {
        register();
        
        if (raw) {
            if (raw.state) {
                this.state = raw.state;
            }

            if ((this.state == "inprogress") && (raw.completed)) {
                this.completed = toSafeInteger(raw.completed)
            }

            if (raw.white) {
                this.white = {
                    blunder: toSafeInteger(raw.white.blunder),
                    mistake: toSafeInteger(raw.white.mistake),
                    inaccuracy: toSafeInteger(raw.white.inaccuracy),
                    acpl: toSafeInteger(raw.white.acpl)
                }
            }

            if (raw.black) {
                this.black = {
                    blunder: toSafeInteger(raw.black.blunder),
                    mistake: toSafeInteger(raw.black.mistake),
                    inaccuracy: toSafeInteger(raw.black.inaccuracy),
                    acpl: toSafeInteger(raw.black.acpl)
                }
            }

            if (raw.analysis) {
                for (let i = 0; i < raw.analysis.length; i++) {
                    let item = new AnalysisItem(raw.analysis[i], i + 1);
                    this.analysis[i] = item;
                }

                let start = new AnalysisItem();
                start.ply = 0;
                start.move = "";
                start.eval = 0;
                start.mate = undefined;
                start.best = "";
                start.variation = undefined;
                start.depth = 0;
                start.time = 0;
        
                this.analysis.unshift(start);

                const len = this.analysis.length;
                let prev: number | undefined = 0;
                for (let i = 1; i < len; i++) {
                    this.analysis[i].normalize(prev);
                    prev = this.analysis[i].eval;
                }

                for (let i = 0; i < len; i++) {
                    if (i < len - 1) {
                        this.analysis[i].extend(this.analysis[i + 1]);
                    }
                }
            }
        }
    }

    public findNext(color: Colors.BW, ply: number, type: "blunder" | "mistake" | "inaccuracy"): number | undefined {
        const judgments = this.analysis.filter((value) => {
            return ((value.color === color) && (value.judgment !== undefined) && (type === value.judgment.name.toLowerCase()));
        });

        if (judgments.length > 0) {
            const right = judgments.filter((value) => { return value.ply > ply});
            if (right.length > 0) {
                return right[0].ply;
            }

            const left = judgments.filter((value) => { return value.ply < ply});
            if (left.length > 0) {
                return left[0].ply;
            }
        }
        
        return undefined;
    }
}