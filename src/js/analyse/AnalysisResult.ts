import toSafeInteger from 'lodash-es/toSafeInteger';
import { Colors } from 'onix-chess';
import { register as i18nRegister } from '../i18n';
import { IUserAnalysis, IGameAnalysis, IView } from './Interfaces';
import { EvalItem } from './EvalItem';


export class AnalysisResult implements IGameAnalysis {
    public state: string = "empty";
    
    public completed: number = 0;
    
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

    public constructor(data?: IView) {
        i18nRegister();
        
        let that = this;

        if (data && data.analysis) {
            let analysis = data.analysis;
            if (analysis.state) {
                that.state = analysis.state;
            }

            if ((that.state == "inprogress") && (analysis.completed)) {
                that.completed = toSafeInteger(analysis.completed)
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