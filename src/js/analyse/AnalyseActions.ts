import { GameNavigateToPlyAction } from "onix-chess/dist/actions/ChessActions";
import * as types from './AnalyseActionTypes';
import { IView } from './Interfaces';

export type LoadAnalysisAction = {
    type: types.LOAD_ANALYSIS,
    analysis: IView
};

export type RequestAnalysisAction = {
    type: types.REQUEST_ANALYSIS
};


export type AnalyseAction = LoadAnalysisAction | RequestAnalysisAction | GameNavigateToPlyAction;