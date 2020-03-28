
import { AnalysisGlyph } from "./AnalysisGlyph";

export class AnalysisJudgment {
    
    public glyph?: AnalysisGlyph = undefined;

    public name: string;

    public comment: string;

    public constructor(raw: any) {
        this.name = raw.name;
        this.comment = raw.comment;

        if (raw.glyph) {
            this.glyph = new AnalysisGlyph(raw.glyph);
        }
    }
}