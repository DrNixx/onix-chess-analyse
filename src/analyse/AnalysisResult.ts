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

                let prev = 0;
                for (let i = 0; i < this.analysis.length; i++) {
                    this.analysis[i].normalize(prev);
                    prev = this.analysis[i].eval;
                }
            }
        }
    }
}