import { Store, createStore as reduxCreateStore, combineReducers } from 'redux';
import { AnalyseRelatedState } from "./AnalyseState";
import * as analyseActions from './AnalyseActionConsts';
import { AnalyseAction } from "./AnalyseActions";
import { analyseReducer } from "./AnalyseReducer";

export type AnalyseStore = Store<AnalyseRelatedState, AnalyseAction>;

export const dummyStore: AnalyseStore = reduxCreateStore(analyseReducer);

export const gameLoadAnalysis = (store: AnalyseStore, id: number) => {
    fetch('https://www.chess-online.com/api/analyse/game/' + id.toString() + "?v=2", {mode: "cors"})
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            // Read the response as json.
            return response.json();
        })
        .then(function(responseAsJson) {
            if (responseAsJson && responseAsJson.response) {
                store.dispatch({type: analyseActions.LOAD_ANALYSIS, analysis: responseAsJson.response} as AnalyseAction);
            }
        })
        .catch(function(error) {
            console.log('Looks like there was a problem when load analysis: \n', error);
        });
}

export const gameRequestAnalysis = (store: AnalyseStore, id: number) => {
    fetch('https://www.chess-online.com/fishnet/create/' + id.toString(), {mode: "cors"})
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            // Read the response as json.
            return response.json();
        })
        .then(function() {
            store.dispatch({ type: analyseActions.REQUEST_ANALYSIS } as AnalyseAction);
        })
        .catch(function(error) {
            console.log('Looks like there was a problem when request analysis: \n', error);
        });
}