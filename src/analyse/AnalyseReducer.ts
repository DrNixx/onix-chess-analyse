import { Reducer } from 'redux';
import { Logger } from 'onix-core';
import { AnalyseState } from "./AnalyseState";
import { AnalyseAction } from "./AnalyseActions";
import * as actions from './AnalyseActionConsts';
import { AnalysisResult } from "./AnalysisResult";

const INITIAL_STATE: AnalyseState = {
    status: "empty",
    evals: []
}


export const analyseReducer: Reducer<AnalyseState> = (state: AnalyseState = INITIAL_STATE, action: AnalyseAction) => {
    switch (action.type) {
        case actions.LOAD_ANALYSIS:
            let result = action.analysis;

            const analysis = new AnalysisResult(result);
            
            return {
                ...state,
                status: analysis.state,
                evals: analysis.analysis
            };

        case actions.REQUEST_ANALYSIS:
            return {
                ...state,
                status: "inprogress",
                evals: []
            };
        default:
            return state;
    }
}
