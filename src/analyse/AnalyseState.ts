import { AnalysisItem } from "./AnalysisItem";
import { IUserAnalysis } from './IUserAnalysis';

export interface AnalyseState {
    status: string,
    completed: number,
    white?: IUserAnalysis,
    black?: IUserAnalysis,
    evals: AnalysisItem[]
}

export interface AnalyseRelatedState {
    analysis: AnalyseState,
}