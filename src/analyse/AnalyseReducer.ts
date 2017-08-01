import { Reducer } from 'redux';
import { AnalyseState } from "./AnalyseState";
import { AnalyseAction } from "./AnalyseActions";
import * as actions from './AnalyseActionConsts';
import { AnalysisResult } from "./AnalysisResult";

const INITIAL_STATE: AnalyseState = {
    state: "empty",
    analysis: []
}


export const analyseReducer: Reducer<AnalyseState> = (state: AnalyseState = INITIAL_STATE, action: AnalyseAction) => {
    switch (action.type) {
        case actions.LOAD_ANALYSIS:
            let result = action.analysis;

            const analysis = new AnalysisResult(result);
            
            return {
                ...state,
                state: analysis.state,
                analysis: analysis.analysis
            };

        case actions.REQUEST_ANALYSIS:
            return {
                ...state,
                state: "inprogress",
                analysis: []
            };
        default:
            return state;
    }
}
