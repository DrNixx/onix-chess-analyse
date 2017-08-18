import toSafeInteger = require('lodash/toSafeInteger');
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
                    let item = new AnalysisItem(raw.analysis[i]);
                    this.analysis[i] = item;
                }

                let start = new AnalysisItem();
                start.ply = 0;
                start.move = "";
                start.eval = 0;
                start.mate = null;
                start.best = "";
                start.variation = null;
                start.depth = 0;
                start.time = 0;
        
                this.analysis.unshift(start);

                const len = this.analysis.length;
                let prev = 0;
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
}