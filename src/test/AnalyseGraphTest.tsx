import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore as reduxCreateStore, combineReducers } from 'redux';
import { AnalyseGraph } from '../analyse/AnalyseGraph';
import { AnalysisResult } from "../analyse/AnalysisResult";
import { AnalyseRelatedState } from "../analyse/AnalyseState";
import { analyseReducer } from '../analyse/AnalyseReducer';

export const AnalyseGraphTest = (container: HTMLElement) => {

    const props = {"state":"ready","white":{"blunder":0,"inaccuracy":0,"mistake":0,"acpl":14},"black":{"blunder":0,"inaccuracy":0,"mistake":0,"acpl":8},"analysis":[{"ply":1,"move":"d4","eval":22},{"ply":2,"move":"d5","eval":15,"best":"Nf6","variation":"Nf6 Nf3 e6 c4 b6 Bf4 Bb4+ Nc3 Bxc3+ bxc3 Bb7 e3 d6 Be2"},{"ply":3,"move":"c4","eval":15},{"ply":4,"move":"c6","eval":26,"best":"e6","variation":"e6 Nf3 Nf6 Nc3 Bb4 Bd2 O-O e3 b6 cxd5 exd5 Bd3 Ba6 Bxa6"},{"ply":5,"move":"cxd5","eval":31,"best":"Nc3","variation":"Nc3 Nf6 cxd5 cxd5 Nf3 Nc6 Bf4 Bf5 Qb3 Na5 Qa4+ Bd7 Qc2 e6"},{"ply":6,"move":"cxd5","eval":20},{"ply":7,"move":"Nc3","eval":20,"best":"Nf3","variation":"Nf3 Nc6 Nc3 Nf6 Bf4 Nh5 Bd2 e6 e3 Bd6 Bd3 O-O O-O Nf6"},{"ply":8,"move":"Nf6","eval":20},{"ply":9,"move":"Nf3","eval":21},{"ply":10,"move":"Nc6","eval":23},{"ply":11,"move":"Bf4","eval":28},{"ply":12,"move":"Bf5","eval":32,"best":"e6","variation":"e6 e3 Bd6 Bxd6 Qxd6 a3 Bd7 Bd3 O-O O-O h6 h3 Rac8 Qb3"},{"ply":13,"move":"e3","eval":39,"best":"Qb3","variation":"Qb3"},{"ply":14,"move":"e6","eval":14},{"ply":15,"move":"Bd3","eval":6,"best":"Bb5","variation":"Bb5 Bd6 Bxd6 Qxd6 Rc1 O-O O-O Bg4 h3 Bxf3 Qxf3 Rac8 Bd3 a6"},{"ply":16,"move":"Bxd3","eval":0},{"ply":17,"move":"Qxd3","eval":0},{"ply":18,"move":"Bd6","eval":0},{"ply":19,"move":"Bxd6","eval":0},{"ply":20,"move":"Qxd6","eval":0},{"ply":21,"move":"h3","eval":2,"best":"O-O","variation":"O-O O-O Rfc1 Rfc8 a3 Na5 Rc2 Nc4 Rac1 Qd8 Ne2 Nd6 Ne5 Rxc2"},{"ply":22,"move":"O-O","eval":-10},{"ply":23,"move":"O-O","eval":-9},{"ply":24,"move":"a6","eval":0,"best":"Rac8","variation":"Rac8 Rac1 a6 Na4 Rc7 Qb1 Rfc8 Nb6 Rd8 Na4 Rdc8"},{"ply":25,"move":"Rac1","eval":0,"best":"Na4","variation":"Na4 Rac8 Rac1 Rc7 Qb1 Rfc8 Nb6 Rd8 Na4 Rdc8"},{"ply":26,"move":"b5","eval":0,"best":"Rfc8","variation":"Rfc8 Na4 Rc7 Nc5 Rac8 Qb1 a5 Na4 Ne4 Nb6 Re8 Na4 Rec8"},{"ply":27,"move":"a4","eval":24}]};
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

    
    ReactDOM.render(React.createElement(AnalyseGraph, { id: 0, store: store }), container, () => { });
};