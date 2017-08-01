import { Store } from 'redux';
import { Observable } from 'rxjs';
import * as analyseActions from './AnalyseActionConsts';
import { AnalyseRelatedState } from "./AnalyseState";
import { AnalyseAction } from "./AnalyseActions";

export type AnalyseStore = Store<AnalyseRelatedState>;

export const gameLoadAnalysis = (store: AnalyseStore, id: number) => {
    Observable.ajax({ 
        url:'https://www.chess-online.com/api/analyse/game/' + id.toString(), 
        method: 'GET', 
        crossDomain: true
    }).subscribe(
        function (data) {
            if (data && data.response) {
                store.dispatch({type: analyseActions.LOAD_ANALYSIS, analysis: data.response} as AnalyseAction);
            }
        },
        function (error) {
            // Log the error
        }
    );
}

export const gameRequestAnalysis = (store: AnalyseStore, id: number) => {
    Observable.ajax({ 
        url:'https://www.chess-online.com/fishnet/create/' + id.toString(), 
        method: 'GET', 
        crossDomain: true
    }).subscribe(
        function (data) {
            store.dispatch({ type: analyseActions.REQUEST_ANALYSIS } as AnalyseAction);
        },
        function (error) {
            // Log the error
        }
    );
}