import { AnalysisItem } from "./AnalysisItem";

export class AnalysisResult {
    public state: string = "empty";

    public analysis: AnalysisItem[] = [];

    public constructor(raw) {
        if (raw) {
            if (raw.state) {
                this.state = raw.state;
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