export interface IUserAnalysis {
    blunder: number,
    inaccuracy: number,
    mistake: number,
    acpl: number,
}

export interface IGameAnalysis {
    state?: string;
    completed?: number;
    by?: string;
    white?: IUserAnalysis;
    black?: IUserAnalysis;
}

export interface IGlyph {    
    name: string;
    symbol: string;
}

export interface IJudgment {
    name: string;
    comment: string;
}

export interface IEval {
    cp?: number;
    mate?: number;
    best?: string;
    variation?: string;
    depth?: number;
    time?: number;
    by?: string;
}

export interface ITreePart {
    ply: number;
    san: string;
    eval?: IEval,
    comments?: IJudgment[],
    glyphs?: IGlyph[],
}

export interface IView {
    analysis?: IGameAnalysis;
    treeParts?: ITreePart[];
}