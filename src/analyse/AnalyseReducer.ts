import { Reducer } from 'redux';
import { AnalyseRelatedState } from "./AnalyseState";
import { AnalyseAction } from "./AnalyseActions";
import * as actions from './AnalyseActionConsts';
import { AnalysisResult } from "./AnalysisResult";

const INITIAL_STATE: AnalyseRelatedState = {
    analysis : {
        state: "empty",
        evals: []
    }
}


export const analyseReducer: Reducer<AnalyseRelatedState> = (state: AnalyseRelatedState = INITIAL_STATE, action: AnalyseAction) => {
    switch (action.type) {
        case actions.LOAD_ANALYSIS:
            let result = action.analysis;

            const analysis = new AnalysisResult(result);
            
            return {
                ...state,
                analysis: {
                    state: analysis.state,
                    evals: analysis.analysis
                }
                
            };

        case actions.REQUEST_ANALYSIS:
            return {
                ...state,
                analysis : {
                    state: "inprogress",
                    evals: []
                }
            };
        default:
            return state;
    }
}
