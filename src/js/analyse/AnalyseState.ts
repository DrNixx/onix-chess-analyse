import { IUserAnalysis, ITreePart } from './Interfaces';
import { AnalysisResult } from './AnalysisResult';

export interface AnalyseState {
    status: string,
    completed: number,
    white?: IUserAnalysis,
    black?: IUserAnalysis,
    result?: AnalysisResult
}

export interface AnalyseRelatedState {
    analysis: AnalyseState,
}