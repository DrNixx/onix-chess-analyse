import toSafeInteger from 'lodash-es/toSafeInteger';
import { Colors, IUserAnalysis, IGameAnalysis, IGameData } from 'onix-chess';
import { register as i18nRegister } from '../i18n';
import { EvalItem } from './EvalItem';


export type AnalyseStatus = "empty" | "unanalysed" | "inprogress" | "ready";

export class AnalysisResult implements IGameAnalysis {
    public state: AnalyseStatus = "empty";
    
    private _completed: number = 0;

    public get completed() {
        return this._completed;
    }

    public set completed(val) {
        this._completed = toSafeInteger(val);
    }
    
    public by?: string;

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

    public analysis: EvalItem[] = [];

    public constructor(data?: IGameData) {
        i18nRegister();
        
        let that = this;

        if (data && data.analysis) {
            let analysis = data.analysis;
            that.state = (analysis.state ?? "empty") as AnalyseStatus;

            if ((that.state == "inprogress") && (analysis.completed)) {
                that.completed = analysis.completed;
            }

            if (analysis.white) {
                that.white = {
                    blunder: toSafeInteger(analysis.white.blunder),
                    mistake: toSafeInteger(analysis.white.mistake),
                    inaccuracy: toSafeInteger(analysis.white.inaccuracy),
                    acpl: toSafeInteger(analysis.white.acpl)
                }
            }

            if (analysis.black) {
                that.black = {
                    blunder: toSafeInteger(analysis.black.blunder),
                    mistake: toSafeInteger(analysis.black.mistake),
                    inaccuracy: toSafeInteger(analysis.black.inaccuracy),
                    acpl: toSafeInteger(analysis.black.acpl)
                }
            }

            if (data.treeParts) {
                let evals = data.treeParts;
                
                evals.forEach((ev) => {
                    that.analysis.push(new EvalItem(ev));
                });

                const len = that.analysis.length;
                that.analysis.forEach((ev, index, arr) => {
                    if (index > 0) {
                        ev.normalize(arr[index - 1]);
                    }
                });

                for (let i = 0; i < len; i++) {
                    if (i < len - 1) {
                        that.analysis[i].extend(this.analysis[i + 1]);
                    }
                }
            }
        }
    }

    public findNext(color: Colors.BW, ply: number, type: "blunder" | "mistake" | "inaccuracy"): number | undefined {
        const judgments = this.analysis.filter((value) => {
            return ((value.color === color) && (value.judgment !== undefined) && (type === value.judgment[0].name.toLowerCase()));
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