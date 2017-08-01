import { AnalysisItem } from "./AnalysisItem";

export interface AnalyseState {
    state: string,
    evals: AnalysisItem[]
}

export interface AnalyseRelatedState {
    analysis: AnalyseState,
}