import { intVal } from 'onix-core';
import { AnalysisItem } from './AnalysisItem';
import { Intl } from '../Intl';
import { IUserAnalysis } from './IUserAnalysis';

export class AnalysisResult {
    public state: string = "empty";

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

    public constructor(raw) {
        Intl.register();
        
        if (raw) {
            if (raw.state) {
                this.state = raw.state;
            }

            if (raw.white) {
                this.white = {
                    blunder: intVal(raw.white.blunder),
                    mistake: intVal(raw.white.mistake),
                    inaccuracy: intVal(raw.white.inaccuracy),
                    acpl: intVal(raw.white.acpl)
                }
            }

            if (raw.black) {
                this.black = {
                    blunder: intVal(raw.black.blunder),
                    mistake: intVal(raw.black.mistake),
                    inaccuracy: intVal(raw.black.inaccuracy),
                    acpl: intVal(raw.black.acpl)
                }
            }

            if (raw.analysis) {
                for (let i = 0; i < raw.analysis.length; i++) {
                    let item = new AnalysisItem(raw.analysis[i]);
                    this.analysis[i] = item;
                }

                const len = this.analysis.length;
                let prev = 0;
                for (let i = 0; i < len; i++) {
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
}