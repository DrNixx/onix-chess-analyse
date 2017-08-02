import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore as reduxCreateStore, combineReducers } from 'redux';
import { AnalyseGraph } from '../analyse/AnalyseGraph';
import { AnalysisResult } from "../analyse/AnalysisResult";
import { AnalyseRelatedState } from "../analyse/AnalyseState";
import { analyseReducer } from '../analyse/AnalyseReducer';

export const AnalyseGraphTest = (container: HTMLElement) => {

    const props = { "state": "ready", "analysis": [{ "ply": 1, "eval": 20, "move": "e4", "best": "d4", "variation": "d4 d5 c4 e6 Nf3 Nf6 Nc3 Nbd7 e3 Be7 b3 O-O Bd3 c6" }, { "ply": 2, "eval": 19, "move": "c6", "best": "e6", "variation": "e6 d4 d5 Nc3 Bb4 exd5 exd5 Bd3 Nf6 Ne2 Nc6 O-O O-O h3" }, { "ply": 3, "eval": 40, "move": "Nc3" }, { "ply": 4, "eval": 43, "move": "d5" }, { "ply": 5, "eval": 37, "move": "Nf3", "best": "d4", "variation": "d4 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3 e6 Bd3 Nf6 O-O Nbd7 Re1 Bd6" }, { "ply": 6, "eval": 43, "move": "Bg4", "best": "dxe4", "variation": "dxe4 Nxe4 Bf5 Ng3 Bg6 d4 e6 Bd3 Nd7 O-O Ngf6 c4 Bd6 Re1" }, { "ply": 7, "eval": 52, "move": "h3", "best": "Be2", "variation": "Be2 dxe4 Nxe4 Nf6 h3 Bxf3 Nxf6+ exf6 Bxf3 Bd6 O-O O-O d4 Re8" }, { "ply": 8, "eval": 31, "move": "Bxf3" }, { "ply": 9, "eval": 33, "move": "gxf3", "best": "Qxf3", "variation": "Qxf3 e6" }, { "ply": 10, "eval": 18, "move": "e5", "best": "e6", "variation": "e6" }, { "ply": 11, "eval": 31, "move": "exd5" }, { "ply": 12, "eval": 26, "move": "cxd5" }, { "ply": 13, "eval": 31, "move": "Bb5+", "best": "d4", "variation": "d4 Nc6 dxe5 d4 Ne2 Bb4+ c3 dxc3 bxc3 Qxd1+ Kxd1 Bc5 f4 Bxf2" }, { "ply": 14, "eval": 22, "move": "Nc6" }, { "ply": 15, "eval": 46, "move": "Qe2", "best": "d4", "variation": "d4 Bb4 dxe5 d4 a3 Bxc3+ bxc3 dxc3 Be3 Ne7 f4 Qd5 Qxd5 Nxd5" }, { "ply": 16, "eval": 0, "move": "Be7" }, { "ply": 17, "eval": 4, "move": "Bxc6+", "best": "Qxe5", "variation": "Qxe5 Nf6 Bxc6+ bxc6 d4 O-O Bf4 g6 Qc7 Nh5 Qxd8 Rfxd8 Be5 Re8" }, { "ply": 18, "eval": -16, "move": "bxc6" }, { "ply": 19, "eval": -2, "move": "Qxe5" }, { "ply": 20, "eval": -14, "move": "Nf6", "best": "Kf8", "variation": "Kf8 d4 Bd6 Qf5 Rb8 b3 Ne7 Qd3 Ng6 Bd2 Qe7+ Be3 Nh4 O-O-O" }, { "ply": 21, "eval": 0, "move": "d4" }, { "ply": 22, "eval": 0, "move": "Qd6", "best": "O-O", "variation": "O-O Bf4 g6 Bg5 Re8 O-O-O Qa5 Rhe1 Ba3 Qxf6 Qxc3 Rxe8+ Rxe8 bxa3" }, { "ply": 23, "eval": 51, "move": "Bf4" }, { "ply": 24, "eval": 56, "move": "Qxe5+" }, { "ply": 25, "eval": 58, "move": "dxe5", "best": "Bxe5", "variation": "Bxe5 Nh5 Ne2 f6 Bf4 Kf7 Kd2 g6 Rae1 Ng7 h4 h5 a4 Nf5" }, { "ply": 26, "eval": 54, "move": "Nh5" }, { "ply": 27, "eval": 57, "move": "Be3" }, { "ply": 28, "eval": 72, "move": "c5", "best": "f6", "variation": "f6 f4 g6 O-O-O Ng7 Ne2 Nf5 c3 fxe5 fxe5 Nxe3 fxe3 Rf8 Rhf1" }, { "ply": 29, "eval": 321, "move": "Nxd5" }, { "ply": 30, "eval": 328, "move": "Rc8" }, { "ply": 31, "eval": 327, "move": "O-O-O" }, { "ply": 32, "eval": 306, "move": "Bd8", "best": "g6", "variation": "g6 Bh6" }, { "ply": 33, "eval": 327, "move": "Nc3" }, { "ply": 34, "eval": 322, "move": "O-O" }, { "ply": 35, "eval": 332, "move": "Ne4", "best": "Rd5", "variation": "Rd5 Bb6 Rhd1 g6 Ne4 Rc7 Bh6 Re8 Nd6 Re6 Nc4 Rce7 f4 f6" }, { "ply": 36, "eval": 321, "move": "Bb6", "best": "Bc7", "variation": "Bc7 Rd5" }, { "ply": 37, "eval": 323, "move": "Rd5" }, { "ply": 38, "eval": 324, "move": "f5", "best": "Rc7", "variation": "Rc7 Rhd1" }, { "ply": 39, "eval": 349, "move": "Nxc5" }, { "ply": 40, "eval": 342, "move": "Nf4" }, { "ply": 41, "eval": 333, "move": "Bxf4" }, { "ply": 42, "eval": 348, "move": "Rxc5" }, { "ply": 43, "eval": 346, "move": "Rxc5" }, { "ply": 44, "eval": 341, "move": "Bxc5" }, { "ply": 45, "eval": 329, "move": "Be3" }, { "ply": 46, "eval": 315, "move": "Rc8", "best": "Bxe3+", "variation": "Bxe3+ fxe3" }, { "ply": 47, "eval": 366, "move": "Rd1" }, { "ply": 48, "eval": 355, "move": "Kf8", "best": "Bxe3+", "variation": "Bxe3+ fxe3 Re8 Rd5 g5 Kd2 Kf7 Rd7+ Re7 Rxe7+ Kxe7 f4 g4 hxg4" }, { "ply": 49, "eval": 393, "move": "Rd5" }, { "ply": 50, "eval": 376, "move": "Bxe3+", "best": "Bb6", "variation": "Bb6 Rd7" }, { "ply": 51, "eval": 411, "move": "fxe3" }, { "ply": 52, "eval": 395, "move": "Ke8", "best": "Rc6", "variation": "Rc6 Ra5 a6 f4 h6 h4 g5 fxg5 hxg5 hxg5 Kf7 Kd2 Kg6 Kd3" }, { "ply": 53, "eval": 438, "move": "Rd6", "best": "Ra5", "variation": "Ra5 Rc7" }, { "ply": 54, "eval": 409, "move": "Ke7", "best": "g5", "variation": "g5 Rf6 g4 fxg4 fxg4 hxg4 Rc5 Re6+ Kd7 Rh6 Rxe5 Rxh7+ Kd6 Kd2" }, { "ply": 55, "eval": 458, "move": "f4" }, { "ply": 56, "eval": 452, "move": "Rg8", "best": "h6", "variation": "h6 Rg6" }, { "ply": 57, "eval": 450, "move": "c4" }, { "ply": 58, "eval": 438, "move": "Rc8", "best": "g5", "variation": "g5 fxg5" }, { "ply": 59, "eval": 557, "move": "b3" }, { "ply": 60, "eval": 542, "move": "Rg8", "best": "h6", "variation": "h6 Ra6" }, { "ply": 61, "eval": 575, "move": "Ra6" }, { "ply": 62, "eval": 552, "move": "Ra8", "best": "g5", "variation": "g5 Rxa7+" }, { "ply": 63, "eval": 655, "move": "Kc2" }, { "ply": 64, "eval": 582, "move": "Kd7", "best": "h6", "variation": "h6 b4" }, { "ply": 65, "eval": 724, "move": "b4" }, { "ply": 66, "eval": 709, "move": "Kc7", "best": "h6", "variation": "h6 b5 g5 Rxh6 gxf4 exf4 Rg8 Ra6 Kc7 Rxa7+ Kb6 Rf7 Kc5 Rc7+" }, { "ply": 67, "eval": 720, "move": "b5" }, { "ply": 68, "eval": 702, "move": "h6", "best": "Kb7", "variation": "Kb7 Kc3" }, { "ply": 69, "eval": 751, "move": "b6+" }, { "ply": 70, "eval": 716, "move": "Kb7", "best": "Kc6", "variation": "Kc6 Kc3" }, { "ply": 71, "mate": 27, "move": "Rxa7+" }, { "ply": 72, "eval": 6389, "move": "Kxb6", "best": "Rxa7", "variation": "Rxa7 bxa7" }] };
    const result = new AnalysisResult(props);
    const preloadedState: AnalyseRelatedState = {
        analysis: {
            status: result.state,
            evals: result.analysis
        }
    }

    const store = reduxCreateStore(
        combineReducers<AnalyseRelatedState>({
            analysis: analyseReducer
        }), preloadedState);

    
    ReactDOM.render(React.createElement(AnalyseGraph, { id: 0, store: store }), container, () => { });
};