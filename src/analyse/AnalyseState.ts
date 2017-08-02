import { AnalysisItem } from "./AnalysisItem";

export interface AnalyseState {
    status: string,
    evals: AnalysisItem[]
}

export interface AnalyseRelatedState {
    analysis: AnalyseState,
}