import * as types from './AnalyseActionTypes';
import { AnalysisResult } from './AnalysisResult';

export type LoadAnalysisAction = {
    type: types.LOAD_ANALYSIS,
    analysis: any
};

export type RequestAnalysisAction = {
    type: types.REQUEST_ANALYSIS
};

export type AnalysePositionAction = {
    type: types.ANALYSE_POSITION,
    ply: number
};

export type AnalyseAction = LoadAnalysisAction | RequestAnalysisAction | AnalysePositionAction;