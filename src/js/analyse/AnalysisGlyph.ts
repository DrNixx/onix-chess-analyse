
export class AnalysisGlyph {
    
    public name: string;
    
    public symbol: string;

    public constructor(raw: any) {
        this.name = raw.name;
        this.symbol = raw.symbol;
    }
}