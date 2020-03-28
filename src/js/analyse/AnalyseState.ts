import { AnalysisItem } from "./AnalysisItem";
import { IUserAnalysis } from './IUserAnalysis';
import { AnalysisResult } from './AnalysisResult';

export interface AnalyseState {
    status: string,
    completed: number,
    white?: IUserAnalysis,
    black?: IUserAnalysis,
    evals: AnalysisItem[],
    result?: AnalysisResult
}

export interface AnalyseRelatedState {
    analysis: AnalyseState,
}