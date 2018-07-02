import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore as reduxCreateStore, combineReducers } from 'redux';
import { AnalyseGraph } from '../analyse/AnalyseGraph';
import { AnalysisResult } from "../analyse/AnalysisResult";
import { AnalyseRelatedState } from "../analyse/AnalyseState";
import { analyseReducer } from '../analyse/AnalyseReducer';

export const AnalyseGraphTest = (container: HTMLElement, props: any) => {

    const result = new AnalysisResult(props);
    const preloadedState: AnalyseRelatedState = {
        analysis: {
            status: result.state,
            white: result.white,
            black: result.black,
            evals: result.analysis
        }
    }

    const store = reduxCreateStore(
        combineReducers<AnalyseRelatedState>({
            analysis: analyseReducer
        }), preloadedState);

    
    ReactDOM.render(React.createElement(AnalyseGraph, { id: 1, store: store, currentPly: 6 }), container, () => { });
};