import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore as reduxCreateStore, combineReducers, createStore } from 'redux';
import { AnalyseGraphAsync } from '../js/analyse/AnalyseGraphAsync';
import { AnalyseGraph } from '../js/analyse/AnalyseGraph';
import { createGameState, gameReducer, GameRelatedState, IGameData } from 'onix-chess';
import { AnalyseGraphProps } from '../js/analyse/AnalyseGraphProps';
import { Tab, Tabs } from 'react-bootstrap';

class AnalyseGraphTestComponent extends React.Component<AnalyseGraphProps, {}> {
    render() {
        return (
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    12345
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <AnalyseGraph {...this.props} />
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    12345
                </Tab>
            </Tabs>
        );
    }
}

export const AnalyseGraphTest = (container: HTMLElement, props: AnalyseGraphProps) => {
    ReactDOM.render(React.createElement(AnalyseGraphTestComponent, props), container, () => { });
};

var data1: IGameData = {
    "game": {
        "id": 7782247,
        "load": false,
        "insite": true,
        "variant": {
            "key": "standard",
            "name": "Standard",
            "shortName": "Std"
        },
        "speed": "correspondence",
        "perf": "maina",
        "rated": true,
        "initialFen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
        "fen": "8/8/p7/6Rk/8/5p1r/3B1K2/8 b - - 0 64",
        "player": "black",
        "turns": 125,
        "startedAtTurn": 0,
        "status": {
            "name": "draw",
            "result": 3,
            "result_name": "ничья принята"
        },
        "event": "\"Личный чемпионат сайта по адвансу - 2018\", финал",
        "tournamentId": 24184,
        "createdAt": 1554204125948,
        "private": false,
        "advance": true,
        "lastMove": "e5g5",
        "check": "h5",
        "moveCentis": [],
        "opening": {
            "code": "A05",
            "name": "Reti: KIA"
        }
    },
    "tournament": {
        "id": 24184,
        "name": "\"Личный чемпионат сайта по адвансу - 2018\", финал",
        "running": false
    },
    "correspondence": {
        "limit": "Адванс 10+2/21",
        "can_pause": true,
        "parts": [
            {
                "per": "game",
                "initial": 864000000,
                "increment": 172800000,
                "min": 0,
                "interval": 1,
                "max": 1814400000
            }
        ],
        "white": 0,
        "black": 0,
        "totalTime": 27122872000,
        "lastMoveAt": 1581326997619
    },
    "player": {
        "color": "white",
        "name": "AHDPEI",
        "user": {
            "id": 32141,
            "name": "AHDPEI",
            "display": "Андрей",
            "online": "12h",
            "perfs": {
                "maina": {
                    "games": 247,
                    "rating": 1651,
                    "avg": 1644
                }
            },
            "language": "ru-RU",
            "profile": {
                "country": "UA"
            },
            "patron": "bronze"
        },
        "rating": 1652,
        "ratingDiff": -1.63
    },
    "opponent": {
        "color": "black",
        "name": "Sheldon",
        "user": {
            "id": 82031,
            "name": "Sheldon",
            "display": "Станислав",
            "online": "12h",
            "perfs": {
                "maina": {
                    "games": 402,
                    "rating": 1584,
                    "avg": 1598
                }
            },
            "language": "ru-RU",
            "profile": {
                "country": "KZ"
            },
            "patron": "bronze"
        },
        "rating": 1598,
        "ratingDiff": 1.63
    },
    "orientation": "white",
    "analysis": {
        "state": "ready",
        "white": {
            "blunder": 0,
            "inaccuracy": 0,
            "mistake": 0,
            "acpl": 6
        },
        "black": {
            "blunder": 0,
            "inaccuracy": 2,
            "mistake": 0,
            "acpl": 9
        }
    },
    "treeParts": [
        {
            "ply": 0,
            "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            "eval": {
                "cp": 19
            }
        },
        {
            "ply": 1,
            "fen": "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
            "id": "FB6LKBxi",
            "uci": "g1f3",
            "san": "Nf3",
            "eval": {
                "cp": 19,
                "best": "e4",
                "variation": "e4 c5 Nc3 Nc6 Nf3 e6 Bb5 Nge7 d4 cxd4 Nxd4 a6 Be2 Nxd4",
                "depth": 36,
                "time": 242294,
                "by": "deep"
            }
        },
        {
            "ply": 2,
            "fen": "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2",
            "id": "u6sKsO8L",
            "uci": "g8f6",
            "san": "Nf6",
            "eval": {
                "cp": 22,
                "depth": 31,
                "time": 141207,
                "by": "deep"
            }
        },
        {
            "ply": 3,
            "fen": "rnbqkb1r/pppppppp/5n2/8/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2",
            "id": "bizhTi8J",
            "uci": "g2g3",
            "san": "g3",
            "eval": {
                "cp": 9,
                "best": "d4",
                "variation": "d4 e6 c4 b6 a3 Bb7 Bf4 Be7 Nc3 O-O d5 Nh5 Be3 d6",
                "depth": 29,
                "time": 142141,
                "by": "deep"
            }
        },
        {
            "ply": 4,
            "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
            "id": "zBzPX/fW",
            "uci": "d7d5",
            "san": "d5",
            "eval": {
                "cp": 20,
                "depth": 24,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 5,
            "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq - 1 3",
            "id": "GCW46rxa",
            "uci": "f1g2",
            "san": "Bg2",
            "eval": {
                "cp": -20,
                "depth": 25,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 6,
            "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq - 0 4",
            "id": "ursZ9bTd",
            "uci": "c7c5",
            "san": "c5",
            "eval": {
                "cp": -15,
                "depth": 20,
                "time": 1522,
                "by": "deep"
            }
        },
        {
            "ply": 7,
            "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/8/5NP1/PPPPPPBP/RNBQ1RK1 b kq - 1 4",
            "id": "RXKUDEKO",
            "uci": "e1g1",
            "san": "O-O",
            "eval": {
                "cp": 10,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 8,
            "fen": "rnbqkb1r/1p2pppp/p4n2/2pp4/8/5NP1/PPPPPPBP/RNBQ1RK1 w kq - 0 5",
            "id": "vRBWOhvV",
            "uci": "a7a6",
            "san": "a6",
            "eval": {
                "cp": 17,
                "best": "h6",
                "variation": "h6 c3 e6 d4 Be7 c4 Nc6 cxd5 exd5 dxc5 Bxc5 a3 a5 Nc3",
                "depth": 21,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 9,
            "fen": "rnbqkb1r/1p2pppp/p4n2/2pp4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq - 0 5",
            "id": "Vwg4Dero",
            "uci": "c2c4",
            "san": "c4",
            "eval": {
                "cp": 28,
                "best": "d3",
                "variation": "d3 e6",
                "depth": 19,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 10,
            "fen": "rnbqkb1r/1p2pppp/p4n2/2p5/2p5/5NP1/PP1PPPBP/RNBQ1RK1 w kq - 0 6",
            "id": "2R0s7O24",
            "uci": "d5c4",
            "san": "dxc4",
            "eval": {
                "cp": 33,
                "depth": 22,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 11,
            "fen": "rnbqkb1r/1p2pppp/p4n2/2p1N3/2p5/6P1/PP1PPPBP/RNBQ1RK1 b kq - 1 6",
            "id": "HlY5vjSN",
            "uci": "f3e5",
            "san": "Ne5",
            "eval": {
                "cp": 42,
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 12,
            "fen": "1nbqkb1r/rp2pppp/p4n2/2p1N3/2p5/6P1/PP1PPPBP/RNBQ1RK1 w k - 2 7",
            "id": "8JEV0eNf",
            "uci": "a8a7",
            "san": "Ra7",
            "eval": {
                "best": "Qd4",
                "variation": "Qd4 Nf3 Qd8 Ne5",
                "depth": 23,
                "time": 4001,
                "by": "offline"
            },
            "comments": [
                {
                    "name": "Inaccuracy",
                    "comment": "Mistake. Best mowe was Qd4"
                }
            ],
            "glyphs": [
                {
                    "name": "Mistake",
                    "symbol": "?"
                }
            ]
        },
        {
            "ply": 13,
            "fen": "1nbqkb1r/rp2pppp/p4n2/2p1N3/P1p5/6P1/1P1PPPBP/RNBQ1RK1 b k - 0 7",
            "id": "x9mPl2Wy",
            "uci": "a2a4",
            "san": "a4",
            "eval": {
                "cp": 63,
                "depth": 23,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 14,
            "fen": "1nb1kb1r/rp2pppp/p4n2/2p1N3/P1pq4/6P1/1P1PPPBP/RNBQ1RK1 w k - 1 8",
            "id": "M+1e2AR+",
            "uci": "d8d4",
            "san": "Qd4",
            "eval": {
                "cp": 60,
                "depth": 22,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 15,
            "fen": "1nb1kb1r/rp2pppp/p4n2/2p5/P1pq4/5NP1/1P1PPPBP/RNBQ1RK1 b k - 2 8",
            "id": "2gPAbllC",
            "uci": "e5f3",
            "san": "Nf3",
            "eval": {
                "cp": 72,
                "depth": 24,
                "time": 4004,
                "by": "offline"
            }
        },
        {
            "ply": 16,
            "fen": "1nbqkb1r/rp2pppp/p4n2/2p5/P1p5/5NP1/1P1PPPBP/RNBQ1RK1 w k - 3 9",
            "id": "xt46Myvp",
            "uci": "d4d8",
            "san": "Qd8",
            "eval": {
                "cp": 66,
                "best": "Qd5",
                "variation": "Qd5 Nc3 Qd8 Ne5 Qd4 d3 Qxe5 Bf4 Qd4 Bxb8 Ra8 Bf4 cxd3 exd3",
                "depth": 21,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 17,
            "fen": "1nbqkb1r/rp2pppp/p4n2/2p5/P1p5/N4NP1/1P1PPPBP/R1BQ1RK1 b k - 4 9",
            "id": "VL7qZtVB",
            "uci": "b1a3",
            "san": "Na3",
            "eval": {
                "cp": 74,
                "depth": 23,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 18,
            "fen": "1n1qkb1r/rp2pppp/p3bn2/2p5/P1p5/N4NP1/1P1PPPBP/R1BQ1RK1 w k - 5 10",
            "id": "9tghhbGh",
            "uci": "c8e6",
            "san": "Be6",
            "eval": {
                "cp": 101,
                "depth": 22,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 19,
            "fen": "1n1qkb1r/rp2pppp/p3bn2/2p1N3/P1p5/N5P1/1P1PPPBP/R1BQ1RK1 b k - 6 10",
            "id": "dSYu1cvL",
            "uci": "f3e5",
            "san": "Ne5",
            "eval": {
                "cp": 92,
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 20,
            "fen": "1n2kb1r/rp2pppp/p3bn2/2p1N3/P1pq4/N5P1/1P1PPPBP/R1BQ1RK1 w k - 7 11",
            "id": "LpHb2Ntw",
            "uci": "d8d4",
            "san": "Qd4",
            "eval": {
                "cp": 90,
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 21,
            "fen": "1n2kb1r/rp2pppp/p3bn2/2p5/P1pq4/N4NP1/1P1PPPBP/R1BQ1RK1 b k - 8 11",
            "id": "t28/fY1f",
            "uci": "e5f3",
            "san": "Nf3",
            "eval": {
                "cp": 71,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 22,
            "fen": "1n1qkb1r/rp2pppp/p3bn2/2p5/P1p5/N4NP1/1P1PPPBP/R1BQ1RK1 w k - 9 12",
            "id": "XH2ESq4U",
            "uci": "d4d8",
            "san": "Qd8",
            "eval": {
                "cp": 85,
                "depth": 22,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 23,
            "fen": "1n1qkb1r/rp2pppp/p3bn2/P1p5/2p5/N4NP1/1P1PPPBP/R1BQ1RK1 b k - 0 12",
            "id": "jZisjd6r",
            "uci": "a4a5",
            "san": "a5",
            "eval": {
                "cp": 92,
                "best": "Ne5",
                "variation": "Ne5 Qd4 Nf3 Qd8 Qc2 b5 d3 cxd3 exd3 Rb7 axb5 axb5 Be3 Bd5",
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 24,
            "fen": "1n1qkb1r/rp2pppp/p4n2/P1pb4/2p5/N4NP1/1P1PPPBP/R1BQ1RK1 w k - 1 13",
            "id": "yTTIuxw5",
            "uci": "e6d5",
            "san": "Bd5",
            "eval": {
                "cp": 102,
                "best": "Qxa5",
                "variation": "Qxa5 d3 Nc6 Ng5 Bd7 Bf4 cxd3 Nc4 Qb4 exd3 h6 Bd2 Qb5 Bxc6",
                "depth": 21,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 25,
            "fen": "1n1qkb1r/rp2pppp/p4n2/P1pb4/Q1p5/N4NP1/1P1PPPBP/R1B2RK1 b k - 2 13",
            "id": "lJFAFdXM",
            "uci": "d1a4",
            "san": "Qa4+",
            "eval": {
                "cp": 76,
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 26,
            "fen": "1n1qkb1r/rp2pppp/p1b2n2/P1p5/Q1p5/N4NP1/1P1PPPBP/R1B2RK1 w k - 3 14",
            "id": "GxLWf2GE",
            "uci": "d5c6",
            "san": "Bc6",
            "eval": {
                "cp": 90,
                "depth": 24,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 27,
            "fen": "1n1qkb1r/rp2pppp/p1b2n2/P1p5/2Q5/N4NP1/1P1PPPBP/R1B2RK1 b k - 0 14",
            "id": "EC4HW5LF",
            "uci": "a4c4",
            "san": "Qxc4",
            "eval": {
                "cp": 79,
                "depth": 25,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 28,
            "fen": "1n1qkb1r/rp3ppp/p1b1pn2/P1p5/2Q5/N4NP1/1P1PPPBP/R1B2RK1 w k - 0 15",
            "id": "dd60FcBC",
            "uci": "e7e6",
            "san": "e6",
            "eval": {
                "cp": 98,
                "depth": 24,
                "time": 4012,
                "by": "offline"
            }
        },
        {
            "ply": 29,
            "fen": "1n1qkb1r/rp3ppp/p1b1pn2/P1p5/2QP4/N4NP1/1P2PPBP/R1B2RK1 b k - 0 15",
            "id": "LD5gQNYh",
            "uci": "d2d4",
            "san": "d4",
            "eval": {
                "cp": 81,
                "depth": 23,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 30,
            "fen": "3qkb1r/rp1n1ppp/p1b1pn2/P1p5/2QP4/N4NP1/1P2PPBP/R1B2RK1 w k - 1 16",
            "id": "e/Ra0xzD",
            "uci": "b8d7",
            "san": "Nbd7",
            "eval": {
                "cp": 82,
                "best": "Qxa5",
                "variation": "Qxa5 dxc5",
                "depth": 20,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 31,
            "fen": "3qkb1r/rp1n1ppp/p1b1pn2/P1p1N3/2QP4/N5P1/1P2PPBP/R1B2RK1 b k - 2 16",
            "id": "4muQzPf3",
            "uci": "f3e5",
            "san": "Ne5",
            "eval": {
                "cp": 74,
                "depth": 20,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 32,
            "fen": "3qkb1r/rp1n1ppp/p3pn2/P1p1N3/2QP4/N5P1/1P2PPbP/R1B2RK1 w k - 0 17",
            "id": "w/6Qb/ED",
            "uci": "c6g2",
            "san": "Bxg2",
            "eval": {
                "cp": 95,
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 33,
            "fen": "3qkb1r/rp1n1ppp/p3pn2/P1p1N3/2QP4/N5P1/1P2PPKP/R1B2R2 b k - 0 17",
            "id": "T0HAcIW9",
            "uci": "g1g2",
            "san": "Kxg2",
            "eval": {
                "cp": 80,
                "depth": 26,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 34,
            "fen": "3qkb1r/rp1n1ppp/p3pn2/P3N3/2Qp4/N5P1/1P2PPKP/R1B2R2 w k - 0 18",
            "id": "lvEwRy2H",
            "uci": "c5d4",
            "san": "cxd4",
            "eval": {
                "cp": 85,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 35,
            "fen": "3qkb1r/rp1n1ppp/p3pn2/P3N3/2Qp1B2/N5P1/1P2PPKP/R4R2 b k - 1 18",
            "id": "b3Q6Z9QA",
            "uci": "c1f4",
            "san": "Bf4",
            "eval": {
                "cp": 85,
                "depth": 23,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 36,
            "fen": "r2qkb1r/1p1n1ppp/p3pn2/P3N3/2Qp1B2/N5P1/1P2PPKP/R4R2 w k - 2 19",
            "id": "CSKfunX1",
            "uci": "a7a8",
            "san": "Ra8",
            "eval": {
                "cp": 91,
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 37,
            "fen": "r2qkb1r/1p1n1ppp/p3pn2/P3N3/2Qp1B2/N5P1/1P2PPKP/R2R4 b k - 3 19",
            "id": "odIssiCU",
            "uci": "f1d1",
            "san": "Rfd1",
            "eval": {
                "cp": 77,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 38,
            "fen": "r2qk2r/1p1n1ppp/p3pn2/P1b1N3/2Qp1B2/N5P1/1P2PPKP/R2R4 w k - 4 20",
            "id": "9s2vrBc8",
            "uci": "f8c5",
            "san": "Bc5",
            "eval": {
                "cp": 68,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 39,
            "fen": "r2qk2r/1p1n1ppp/p3pn2/P1b1N3/2Qp1B2/6P1/1PN1PPKP/R2R4 b k - 5 20",
            "id": "/ZGFWuSG",
            "uci": "a3c2",
            "san": "Nc2",
            "eval": {
                "cp": 84,
                "depth": 25,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 40,
            "fen": "r2q1rk1/1p1n1ppp/p3pn2/P1b1N3/2Qp1B2/6P1/1PN1PPKP/R2R4 w - - 6 21",
            "id": "U591yTi5",
            "uci": "e8g8",
            "san": "O-O",
            "eval": {
                "cp": 49,
                "best": "b5",
                "variation": "b5",
                "depth": 24,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 41,
            "fen": "r2q1rk1/1p1N1ppp/p3pn2/P1b5/2Qp1B2/6P1/1PN1PPKP/R2R4 b - - 0 21",
            "id": "H7jNj1Vu",
            "uci": "e5d7",
            "san": "Nxd7",
            "eval": {
                "cp": 84,
                "best": "Nxd4",
                "variation": "Nxd4 b5",
                "depth": 25,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 42,
            "fen": "r4rk1/1p1q1ppp/p3pn2/P1b5/2Qp1B2/6P1/1PN1PPKP/R2R4 w - - 0 22",
            "id": "vtlCbUjA",
            "uci": "d8d7",
            "san": "Qxd7",
            "eval": {
                "cp": 65,
                "best": "Nxd7",
                "variation": "Nxd7 Nxd4 b5 axb6 Qxb6 Nb3 Qb7+ f3 Bb6 Qb4 Nf6 e4 Rfc8 Na5",
                "depth": 23,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 43,
            "fen": "r4rk1/1p1q1ppp/p3pn2/P1Q5/3p1B2/6P1/1PN1PPKP/R2R4 b - - 0 22",
            "id": "3Iyvhea/",
            "uci": "c4c5",
            "san": "Qxc5",
            "eval": {
                "cp": 84,
                "depth": 27,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 44,
            "fen": "r1r3k1/1p1q1ppp/p3pn2/P1Q5/3p1B2/6P1/1PN1PPKP/R2R4 w - - 1 23",
            "id": "1A5fxu+B",
            "uci": "f8c8",
            "san": "Rfc8",
            "eval": {
                "cp": 81,
                "depth": 26,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 45,
            "fen": "r1r3k1/1p1q1ppp/p3pn2/P7/3Q1B2/6P1/1PN1PPKP/R2R4 b - - 0 23",
            "id": "FkMDZKLr",
            "uci": "c5d4",
            "san": "Qxd4",
            "eval": {
                "cp": 92,
                "depth": 26,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 46,
            "fen": "r1r3k1/1p3ppp/p1q1pn2/P7/3Q1B2/6P1/1PN1PPKP/R2R4 w - - 1 24",
            "id": "e7uyWatP",
            "uci": "d7c6",
            "san": "Qc6+",
            "eval": {
                "cp": 80,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 47,
            "fen": "r1r3k1/1p3ppp/p1q1pn2/P7/3Q1B2/5PP1/1PN1P1KP/R2R4 b - - 0 24",
            "id": "o1qrgOXd",
            "uci": "f2f3",
            "san": "f3",
            "eval": {
                "cp": 62,
                "depth": 25,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 48,
            "fen": "r1r3k1/1p3ppp/p3pn2/P7/3Q1B2/5PP1/1Pq1P1KP/R2R4 w - - 0 25",
            "id": "iBOHVpDq",
            "uci": "c6c2",
            "san": "Qxc2",
            "eval": {
                "cp": 72,
                "depth": 26,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 49,
            "fen": "r1r3k1/1p3ppp/p3pn2/P7/3Q1B2/5PP1/1PqRP1KP/R7 b - - 1 25",
            "id": "HIG1cTQN",
            "uci": "d1d2",
            "san": "Rd2",
            "eval": {
                "cp": 87,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 50,
            "fen": "r1r3k1/1p3ppp/p3pn2/P7/2qQ1B2/5PP1/1P1RP1KP/R7 w - - 2 26",
            "id": "pK9yv88v",
            "uci": "c2c4",
            "san": "Qc4",
            "eval": {
                "cp": 75,
                "best": "Qc5",
                "variation": "Qc5 Be5",
                "depth": 22,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 51,
            "fen": "r1r3k1/1p3ppp/p3pn2/P7/2Q2B2/5PP1/1P1RP1KP/R7 b - - 0 26",
            "id": "m+8FMIF5",
            "uci": "d4c4",
            "san": "Qxc4",
            "eval": {
                "cp": 82,
                "best": "Be5",
                "variation": "Be5 Qxd4 Bxd4 Rc7 Rad1 Rd8 Kf2 Rcd7 Ke1 Ne8 Bf2 Rxd2 Rxd2 Rxd2",
                "depth": 25,
                "time": 4005,
                "by": "offline"
            }
        },
        {
            "ply": 52,
            "fen": "r5k1/1p3ppp/p3pn2/P7/2r2B2/5PP1/1P1RP1KP/R7 w - - 0 27",
            "id": "z43sgMho",
            "uci": "c8c4",
            "san": "Rxc4",
            "eval": {
                "cp": 81,
                "depth": 28,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 53,
            "fen": "r5k1/1p3ppp/p3pn2/P7/2r1PB2/5PP1/1P1R2KP/R7 b - - 0 27",
            "id": "nJM3/fXJ",
            "uci": "e2e4",
            "san": "e4",
            "eval": {
                "cp": 64,
                "depth": 27,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 54,
            "fen": "2r3k1/1p3ppp/p3pn2/P7/2r1PB2/5PP1/1P1R2KP/R7 w - - 1 28",
            "id": "PWWqase0",
            "uci": "a8c8",
            "san": "Rac8",
            "eval": {
                "cp": 79,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 55,
            "fen": "2r3k1/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/R7 b - - 2 28",
            "id": "GOhTYSET",
            "uci": "f4e5",
            "san": "Be5",
            "eval": {
                "cp": 63,
                "best": "Kf2",
                "variation": "Kf2 Rc2 Rd1 Kf8 Ke3 Rxd2 Rxd2 Ke7 Bd6+ Ke8 Be5 Rc5 Bc3 Nd7",
                "depth": 21,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 56,
            "fen": "2r2k2/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/R7 w - - 3 29",
            "id": "55YJkFIn",
            "uci": "g8f8",
            "san": "Kf8",
            "eval": {
                "cp": 63,
                "depth": 24,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 57,
            "fen": "2r2k2/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/3R4 b - - 4 29",
            "id": "S/0xOvjs",
            "uci": "a1d1",
            "san": "Rad1",
            "eval": {
                "cp": 77,
                "best": "Bc3",
                "variation": "Bc3 h5 Kf2 Ke7 Ra3 R8c5 Rb3 Rb5 Rxb5 axb5 Ke3 Ne8 Rd4 Rxd4",
                "depth": 23,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 58,
            "fen": "2r1k3/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/3R4 w - - 5 30",
            "id": "TY0bSqPZ",
            "uci": "f8e8",
            "san": "Ke8",
            "eval": {
                "cp": 64,
                "depth": 25,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 59,
            "fen": "2r1k3/1p3ppp/p3pn2/P7/2r1P3/2B2PP1/1P1R2KP/3R4 b - - 6 30",
            "id": "2rDE2C/W",
            "uci": "e5c3",
            "san": "Bc3",
            "eval": {
                "cp": 74,
                "depth": 28,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 60,
            "fen": "2r1k3/1p3ppp/p3pn2/P1r5/4P3/2B2PP1/1P1R2KP/3R4 w - - 7 31",
            "id": "Lq5yGmp7",
            "uci": "c4c5",
            "san": "R4c5",
            "eval": {
                "cp": 60,
                "depth": 28,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 61,
            "fen": "2r1k3/1p3ppp/p3pn2/P1r5/4P3/2B2PP1/1P1R1K1P/3R4 b - - 8 31",
            "id": "VmhY9KmN",
            "uci": "g2f2",
            "san": "Kf2",
            "eval": {
                "cp": 60,
                "best": "h3",
                "variation": "h3 Rb5 Kf2 Ke7 Rd4 e5 Rb4 Rxb4 Bxb4+ Ke8 Bc3 Nd7 Ke3 f6",
                "depth": 26,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 62,
            "fen": "2r1k3/1p3ppp/p3pn2/Pr6/4P3/2B2PP1/1P1R1K1P/3R4 w - - 9 32",
            "id": "SWvx3rzB",
            "uci": "c5b5",
            "san": "Rb5",
            "eval": {
                "cp": 65,
                "depth": 24,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 63,
            "fen": "2r1k3/1p3ppp/p3pn2/Pr6/4P3/2B1KPP1/1P1R3P/3R4 b - - 10 32",
            "id": "IEOVzPFs",
            "uci": "f2e3",
            "san": "Ke3",
            "eval": {
                "cp": 68,
                "best": "h3",
                "variation": "h3 Ke7",
                "depth": 23,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 64,
            "fen": "2r5/1p2kppp/p3pn2/Pr6/4P3/2B1KPP1/1P1R3P/3R4 w - - 11 33",
            "id": "2qDnSpez",
            "uci": "e8e7",
            "san": "Ke7",
            "eval": {
                "cp": 50,
                "depth": 24,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 65,
            "fen": "2r5/1p2kppp/p3pn2/Pr6/3RP3/2B1KPP1/1P5P/3R4 b - - 12 33",
            "id": "woenSid3",
            "uci": "d2d4",
            "san": "Rd4",
            "eval": {
                "cp": 61,
                "best": "h4",
                "variation": "h4 h5 Rd4 Ke8 R1d2 g6 Ke2 Ke7 Rd1 Ke8 R1d3 Ke7 Ke3 Ke8",
                "depth": 22,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 66,
            "fen": "2r5/1p2kp1p/p3pnp1/Pr6/3RP3/2B1KPP1/1P5P/3R4 w - - 0 34",
            "id": "xTIiPkOy",
            "uci": "g7g6",
            "san": "g6",
            "eval": {
                "cp": 48,
                "best": "e5",
                "variation": "e5 Rb4 Rcc5 f4 Ng4+ Ke2 Ke8 Rxb5 Rxb5 h3 Nf6 Kf3 exf4 Kxf4",
                "depth": 21,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 67,
            "fen": "2r5/1p2kp1p/p3pnp1/Pr6/3RP1P1/2B1KP2/1P5P/3R4 b - - 0 34",
            "id": "GpHaPpx2",
            "uci": "g3g4",
            "san": "g4",
            "eval": {
                "cp": 69,
                "depth": 21,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 68,
            "fen": "2r5/1p2kp2/p3pnp1/Pr5p/3RP1P1/2B1KP2/1P5P/3R4 w - - 0 35",
            "id": "H2x4E1Yx",
            "uci": "h7h5",
            "san": "h5",
            "eval": {
                "cp": 75,
                "best": "e5",
                "variation": "e5",
                "depth": 23,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 69,
            "fen": "2r5/1p2kp2/p3pnp1/Pr5P/3RP3/2B1KP2/1P5P/3R4 b - - 0 35",
            "id": "1/qp7166",
            "uci": "g4h5",
            "san": "gxh5",
            "eval": {
                "cp": 81,
                "depth": 26,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 70,
            "fen": "2r5/1p2kp2/p3pnp1/P6r/3RP3/2B1KP2/1P5P/3R4 w - - 0 36",
            "id": "HeDRUbky",
            "uci": "b5h5",
            "san": "Rxh5",
            "eval": {
                "cp": 65,
                "depth": 27,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 71,
            "fen": "2r5/1p2kp2/p3pnp1/P6r/1R2P3/2B1KP2/1P5P/3R4 b - - 1 36",
            "id": "9QwlRBIT",
            "uci": "d4b4",
            "san": "Rb4",
            "eval": {
                "cp": 64,
                "depth": 25,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 72,
            "fen": "8/1pr1kp2/p3pnp1/P6r/1R2P3/2B1KP2/1P5P/3R4 w - - 2 37",
            "id": "v6Mt4smK",
            "uci": "c8c7",
            "san": "Rc7",
            "eval": {
                "cp": 90,
                "depth": 26,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 73,
            "fen": "8/1pr1kp2/p3pnp1/P6r/4P3/1RB1KP2/1P5P/3R4 b - - 3 37",
            "id": "4wwv/Mfo",
            "uci": "b4b3",
            "san": "Rb3",
            "eval": {
                "cp": 64,
                "depth": 25,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 74,
            "fen": "8/1pr1kp2/p3pnp1/P7/4P3/1RB1KP1r/1P5P/3R4 w - - 4 38",
            "id": "loY7VlIw",
            "uci": "h5h3",
            "san": "Rh3",
            "eval": {
                "cp": 35,
                "depth": 24,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 75,
            "fen": "8/1pr1kp2/p3pnp1/P7/4PK2/1RB2P1r/1P5P/3R4 b - - 5 38",
            "id": "R+A/Elaw",
            "uci": "e3f4",
            "san": "Kf4",
            "eval": {
                "cp": 75,
                "depth": 29,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 76,
            "fen": "8/1prnkp2/p3p1p1/P7/4PK2/1RB2P1r/1P5P/3R4 w - - 6 39",
            "id": "p/RjgocU",
            "uci": "f6d7",
            "san": "Nd7",
            "eval": {
                "cp": 77,
                "depth": 27,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 77,
            "fen": "8/1prnkp2/p3p1p1/P7/1B2PK2/1R3P1r/1P5P/3R4 b - - 7 39",
            "id": "dcwtxKMw",
            "uci": "c3b4",
            "san": "Bb4+",
            "eval": {
                "cp": 35,
                "depth": 30,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 78,
            "fen": "8/1prn1p2/p3pkp1/P7/1B2PK2/1R3P1r/1P5P/3R4 w - - 8 40",
            "id": "MBnwFWej",
            "uci": "e7f6",
            "san": "Kf6",
            "eval": {
                "cp": 36,
                "depth": 31,
                "time": 4007,
                "by": "offline"
            }
        },
        {
            "ply": 79,
            "fen": "8/1prn1p2/p2Bpkp1/P7/4PK2/1R3P1r/1P5P/3R4 b - - 9 40",
            "id": "KIGBtxZO",
            "uci": "b4d6",
            "san": "Bd6",
            "eval": {
                "cp": 35,
                "depth": 32,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 80,
            "fen": "8/1prn1p2/p2Bpk2/P5p1/4PK2/1R3P1r/1P5P/3R4 w - - 0 41",
            "id": "gdBZvudc",
            "uci": "g6g5",
            "san": "g5+",
            "eval": {
                "cp": 35,
                "depth": 29,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 81,
            "fen": "8/1prn1p2/p2Bpk2/P5p1/4P1K1/1R3P1r/1P5P/3R4 b - - 1 41",
            "id": "MBymVH4/",
            "uci": "f4g4",
            "san": "Kg4",
            "eval": {
                "cp": 51,
                "depth": 31,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 82,
            "fen": "8/1prn1p2/p2Bpk2/P5p1/4P1Kr/1R3P2/1P5P/3R4 w - - 2 42",
            "id": "qphr1zz9",
            "uci": "h3h4",
            "san": "Rh4+",
            "eval": {
                "cp": 51,
                "depth": 30,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 83,
            "fen": "8/1prn1p2/p2Bpk2/P5p1/4P2r/1R3PK1/1P5P/3R4 b - - 3 42",
            "id": "xh9pXcHd",
            "uci": "g4g3",
            "san": "Kg3",
            "eval": {
                "cp": 60,
                "depth": 31,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 84,
            "fen": "8/1p1n1p2/p2Bpk2/P5p1/4P2r/1R3PK1/1Pr4P/3R4 w - - 4 43",
            "id": "nPL4KxLU",
            "uci": "c7c2",
            "san": "Rc2",
            "eval": {
                "cp": 45,
                "depth": 30,
                "time": 4015,
                "by": "offline"
            }
        },
        {
            "ply": 85,
            "fen": "8/1p1n1p2/p2Bpk2/P5p1/4P2r/1R3PKP/1Pr5/3R4 b - - 0 43",
            "id": "lzvoQELd",
            "uci": "h2h3",
            "san": "h3",
            "eval": {
                "cp": 76,
                "depth": 29,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 86,
            "fen": "8/1p1n1p2/p2Bp1k1/P5p1/4P2r/1R3PKP/1Pr5/3R4 w - - 1 44",
            "id": "YWAPyiGI",
            "uci": "f6g6",
            "san": "Kg6",
            "eval": {
                "cp": 32,
                "depth": 32,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 87,
            "fen": "8/1p1nBp2/p3p1k1/P5p1/4P2r/1R3PKP/1Pr5/3R4 b - - 2 44",
            "id": "ya/54gZj",
            "uci": "d6e7",
            "san": "Be7",
            "eval": {
                "cp": 32,
                "depth": 30,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 88,
            "fen": "8/1p2Bp2/p3p1k1/P3n1p1/4P2r/1R3PKP/1Pr5/3R4 w - - 3 45",
            "id": "ot9Q+brO",
            "uci": "d7e5",
            "san": "Ne5",
            "eval": {
                "cp": 30,
                "depth": 31,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 89,
            "fen": "3R4/1p2Bp2/p3p1k1/P3n1p1/4P2r/1R3PKP/1Pr5/8 b - - 4 45",
            "id": "ydRfWdV0",
            "uci": "d1d8",
            "san": "Rd8",
            "eval": {
                "cp": 29,
                "depth": 30,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 90,
            "fen": "3R4/1p2B3/p3ppk1/P3n1p1/4P2r/1R3PKP/1Pr5/8 w - - 0 46",
            "id": "xJ2hebC+",
            "uci": "f7f6",
            "san": "f6",
            "eval": {
                "cp": 35,
                "depth": 29,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 91,
            "fen": "3R4/1R2B3/p3ppk1/P3n1p1/4P2r/5PKP/1Pr5/8 b - - 0 46",
            "id": "1YmUcVh2",
            "uci": "b3b7",
            "san": "Rxb7",
            "eval": {
                "cp": 76,
                "best": "Bd6",
                "variation": "Bd6 Nc6 Rg8+ Kh7 Rf8 Nxa5 Rb6 Rc6 Rxc6 Nxc6 Rxf6 Kg7 Rf8 Rh7",
                "depth": 25,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 92,
            "fen": "3R4/1R2B3/p3ppk1/P3n1p1/4Pr2/5PKP/1Pr5/8 w - - 1 47",
            "id": "Y8ckWpZF",
            "uci": "h4f4",
            "san": "Rf4",
            "eval": {
                "cp": 29,
                "depth": 33,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 93,
            "fen": "3R4/4B3/p3ppk1/P3n1p1/4Pr2/1R3PKP/1Pr5/8 b - - 2 47",
            "id": "cF4MB6sx",
            "uci": "b7b3",
            "san": "Rb3",
            "eval": {
                "cp": 29,
                "depth": 35,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 94,
            "fen": "3R4/4B3/p1n1ppk1/P5p1/4Pr2/1R3PKP/1Pr5/8 w - - 3 48",
            "id": "EusY4o/P",
            "uci": "e5c6",
            "san": "Nc6",
            "eval": {
                "cp": 30,
                "depth": 34,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 95,
            "fen": "2R5/4B3/p1n1ppk1/P5p1/4Pr2/1R3PKP/1Pr5/8 b - - 4 48",
            "id": "3LhQqGZ8",
            "uci": "d8c8",
            "san": "Rc8",
            "eval": {
                "cp": 30,
                "depth": 34,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 96,
            "fen": "2R5/4B3/p3ppk1/n5p1/4Pr2/1R3PKP/1Pr5/8 w - - 0 49",
            "id": "fAhsr6et",
            "uci": "c6a5",
            "san": "Nxa5",
            "eval": {
                "cp": 30,
                "depth": 35,
                "time": 4029,
                "by": "offline"
            }
        },
        {
            "ply": 97,
            "fen": "2R5/4B3/p3ppk1/n5p1/4Pr2/2R2PKP/1Pr5/8 b - - 1 49",
            "id": "bfGLvJev",
            "uci": "b3c3",
            "san": "Rbc3",
            "eval": {
                "cp": 29,
                "depth": 33,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 98,
            "fen": "2R5/4B3/p3ppk1/n5p1/4Pr2/2R2PKP/1r6/8 w - - 0 50",
            "id": "xwNc7znE",
            "uci": "c2b2",
            "san": "Rxb2",
            "eval": {
                "cp": 29,
                "depth": 33,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 99,
            "fen": "2R5/8/p2Bppk1/n5p1/4Pr2/2R2PKP/1r6/8 b - - 1 50",
            "id": "G25dgwEq",
            "uci": "e7d6",
            "san": "Bd6",
            "eval": {
                "cp": 29,
                "depth": 31,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 100,
            "fen": "2R5/8/p2B1pk1/n3p1p1/4Pr2/2R2PKP/1r6/8 w - - 0 51",
            "id": "id0azSSl",
            "uci": "e6e5",
            "san": "e5",
            "eval": {
                "cp": 29,
                "depth": 31,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 101,
            "fen": "2R5/2R5/p2B1pk1/n3p1p1/4Pr2/5PKP/1r6/8 b - - 1 51",
            "id": "kc2uiLft",
            "uci": "c3c7",
            "san": "R3c7",
            "eval": {
                "cp": 46,
                "depth": 30,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 102,
            "fen": "2R5/1rR5/p2B1pk1/n3p1p1/4Pr2/5PKP/8/8 w - - 2 52",
            "id": "XkvryDHI",
            "uci": "b2b7",
            "san": "Rb7",
            "eval": {
                "cp": 61,
                "depth": 31,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 103,
            "fen": "2R5/1R6/p2B1pk1/n3p1p1/4Pr2/5PKP/8/8 b - - 0 52",
            "id": "XCdBXgz3",
            "uci": "c7b7",
            "san": "Rxb7",
            "eval": {
                "cp": 51,
                "depth": 30,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 104,
            "fen": "2R5/1n6/p2B1pk1/4p1p1/4Pr2/5PKP/8/8 w - - 0 53",
            "id": "AW+of52z",
            "uci": "a5b7",
            "san": "Nxb7",
            "eval": {
                "cp": 63,
                "depth": 34,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 105,
            "fen": "2R5/1n2B3/p4pk1/4p1p1/4Pr2/5PKP/8/8 b - - 1 53",
            "id": "kKbA+MDi",
            "uci": "d6e7",
            "san": "Be7",
            "eval": {
                "cp": 29,
                "depth": 31,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 106,
            "fen": "2R5/4B3/p4pk1/n3p1p1/4Pr2/5PKP/8/8 w - - 2 54",
            "id": "wv/O0Sea",
            "uci": "b7a5",
            "san": "Na5",
            "eval": {
                "cp": 29,
                "depth": 33,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 107,
            "fen": "8/4B3/p4pk1/n3p1p1/4Pr2/2R2PKP/8/8 b - - 3 54",
            "id": "2IzIQlgk",
            "uci": "c8c3",
            "san": "Rc3",
            "eval": {
                "cp": 29,
                "depth": 33,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 108,
            "fen": "8/4B3/p4p2/n3p1pk/4Pr2/2R2PKP/8/8 w - - 4 55",
            "id": "EsAhaXOU",
            "uci": "g6h5",
            "san": "Kh5",
            "eval": {
                "cp": 29,
                "depth": 32,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 109,
            "fen": "8/4B3/p4p2/n3p1pk/4Pr2/2R2P1P/6K1/8 b - - 5 55",
            "id": "Wt6YjQ2w",
            "uci": "g3g2",
            "san": "Kg2",
            "eval": {
                "cp": 29,
                "depth": 30,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 110,
            "fen": "8/4B3/p7/n3pppk/4Pr2/2R2P1P/6K1/8 w - - 0 56",
            "id": "4zTb3lYd",
            "uci": "f6f5",
            "san": "f5",
            "eval": {
                "cp": 29,
                "depth": 32,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 111,
            "fen": "8/8/p7/n3pppk/1B2Pr2/2R2P1P/6K1/8 b - - 1 56",
            "id": "GXfFjTzP",
            "uci": "e7b4",
            "san": "Bb4",
            "eval": {
                "cp": 30,
                "depth": 35,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 112,
            "fen": "8/1n6/p7/4pppk/1B2Pr2/2R2P1P/6K1/8 w - - 2 57",
            "id": "a5Y/qz2L",
            "uci": "a5b7",
            "san": "Nb7",
            "eval": {
                "cp": 30,
                "depth": 34,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 113,
            "fen": "8/1nR5/p7/4pppk/1B2Pr2/5P1P/6K1/8 b - - 3 57",
            "id": "R6murW0a",
            "uci": "c3c7",
            "san": "Rc7",
            "eval": {
                "cp": 30,
                "depth": 34,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 114,
            "fen": "3n4/2R5/p7/4pppk/1B2Pr2/5P1P/6K1/8 w - - 4 58",
            "id": "NfMV0Bjq",
            "uci": "b7d8",
            "san": "Nd8",
            "eval": {
                "cp": 30,
                "depth": 32,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 115,
            "fen": "3n4/2R5/p7/4pppk/4Pr2/5P1P/3B2K1/8 b - - 5 58",
            "id": "cbZjlapS",
            "uci": "b4d2",
            "san": "Bd2",
            "eval": {
                "cp": 30,
                "depth": 31,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 116,
            "fen": "8/2R5/p3n3/4pppk/4Pr2/5P1P/3B2K1/8 w - - 6 59",
            "id": "sZZs/ac1",
            "uci": "d8e6",
            "san": "Ne6",
            "eval": {
                "cp": 30,
                "best": "fxe4",
                "variation": "fxe4 Bxf4 exf3+ Kxf3 exf4 Re7 Nc6 Rh7+ Kg6 Rc7 Ne5+ Ke4 Nf7 Rc6+",
                "depth": 29,
                "time": 4002,
                "by": "offline"
            },
            "comments": [
                {
                    "name": "Inaccuracy",
                    "comment": "Mistake. Best mowe was fxe4"
                }
            ],
            "glyphs": [
                {
                    "name": "Mistake",
                    "symbol": "?"
                }
            ]
        },
        {
            "ply": 117,
            "fen": "8/4R3/p3n3/4pppk/4Pr2/5P1P/3B2K1/8 b - - 7 59",
            "id": "8v3WtKZr",
            "uci": "c7e7",
            "san": "Re7",
            "eval": {
                "cp": 94,
                "depth": 36,
                "time": 4003,
                "by": "offline"
            }
        },
        {
            "ply": 118,
            "fen": "8/4R3/p3n3/4p1pk/4pr2/5P1P/3B2K1/8 w - - 0 60",
            "id": "X2goOWws",
            "uci": "f5e4",
            "san": "fxe4",
            "eval": {
                "cp": 92,
                "depth": 40,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 119,
            "fen": "8/8/p3R3/4p1pk/4pr2/5P1P/3B2K1/8 b - - 0 60",
            "id": "C84dCHIN",
            "uci": "e7e6",
            "san": "Rxe6",
            "eval": {
                "cp": 84,
                "depth": 41,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 120,
            "fen": "8/8/p3R3/4p1pk/5r2/5p1P/3B2K1/8 w - - 0 61",
            "id": "Ds0SyDC9",
            "uci": "e4f3",
            "san": "exf3+",
            "eval": {
                "cp": 84,
                "depth": 41,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 121,
            "fen": "8/8/p3R3/4p1pk/5r2/5p1P/3B1K2/8 b - - 1 61",
            "id": "VEJpzu0w",
            "uci": "g2f2",
            "san": "Kf2",
            "eval": {
                "cp": 84,
                "depth": 39,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 122,
            "fen": "8/8/p3R3/4p1pk/7r/5p1P/3B1K2/8 w - - 2 62",
            "id": "fAFo/ULR",
            "uci": "f4h4",
            "san": "Rh4",
            "eval": {
                "cp": 84,
                "depth": 37,
                "time": 4002,
                "by": "offline"
            }
        },
        {
            "ply": 123,
            "fen": "8/8/p7/4R1pk/7r/5p1P/3B1K2/8 b - - 0 62",
            "id": "5KMUYVTJ",
            "uci": "e6e5",
            "san": "Rxe5",
            "eval": {
                "cp": 84,
                "depth": 35,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 124,
            "fen": "8/8/p7/4R1pk/8/5p1r/3B1K2/8 w - - 0 63",
            "id": "uuPs2vif",
            "uci": "h4h3",
            "san": "Rxh3",
            "eval": {
                "cp": 84,
                "depth": 36,
                "time": 4001,
                "by": "offline"
            }
        },
        {
            "ply": 125,
            "fen": "8/8/p7/6Rk/8/5p1r/3B1K2/8 b - - 0 63",
            "id": "5Ew7XDki",
            "uci": "e5g5",
            "san": "Rxg5+",
            "eval": {
                "cp": 91,
                "depth": 30,
                "time": 4002,
                "by": "offline"
            }
        }
    ],
    "finalFen": "8/8/p7/6Rk/8/5p1r/3B1K2/8 b - - 0 64",
    "pgn": "[Event \"'Личный чемпионат сайта по адвансу - 2018', финал\"]\n[Site \"https://www.chess-online.com/7782247\"]\n[Date \"2020.02.10\"]\n[Round \"?\"]\n[White \"AHDPEI\"]\n[Black \"Sheldon\"]\n[Result \"1/2-1/2\"]\n[WhiteUSCF \"1652\"]\n[BlackUSCF \"1598\"]\n[ECO \"A05\"]\n[EventDate \"2019.04.02\"]\n[Termination \"normal\"]\n\n1. Nf3 Nf6 2. g3 d5 3. Bg2 c5 4. O-O a6 5. c4 dxc4 6. Ne5 Ra7 7. a4 Qd4 8. Nf3\nQd8 9. Na3 Be6 10. Ne5 Qd4 11. Nf3 Qd8 12. a5 Bd5 13. Qa4+ Bc6 14. Qxc4 e6 15.\nd4 Nbd7 16. Ne5 Bxg2 17. Kxg2 cxd4 18. Bf4 Ra8 19. Rfd1 Bc5 20. Nc2 O-O 21. Nxd7\nQxd7 22. Qxc5 Rfc8 23. Qxd4 Qc6+ 24. f3 Qxc2 25. Rd2 Qc4 26. Qxc4 Rxc4 27. e4\nRac8 28. Be5 Kf8 29. Rad1 Ke8 30. Bc3 R4c5 31. Kf2 Rb5 32. Ke3 Ke7 33. Rd4 g6\n34. g4 h5 35. gxh5 Rxh5 36. Rb4 Rc7 37. Rb3 Rh3 38. Kf4 Nd7 39. Bb4+ Kf6 40. Bd6\ng5+ 41. Kg4 Rh4+ 42. Kg3 Rc2 43. h3 Kg6 44. Be7 Ne5 45. Rd8 f6 46. Rxb7 Rf4 47.\nRb3 Nc6 48. Rc8 Nxa5 49. Rbc3 Rxb2 50. Bd6 e5 51. R3c7 Rb7 52. Rxb7 Nxb7 53. Be7\nNa5 54. Rc3 Kh5 55. Kg2 f5 56. Bb4 Nb7 57. Rc7 Nd8 58. Bd2 Ne6 59. Re7 fxe4 60.\nRxe6 exf3+ 61. Kf2 Rh4 62. Rxe5 Rxh3 63. Rxg5+ 1/2-1/2\n"
};

var data2: IGameData = {
    game: {
        id: 7333325,
        load: false,
        insite: true,
        variant: {
            key: "standard",
            name: "Standard",
            shortName: "Std"
        },
        speed: "correspondence",
        perf: "main",
        rated: true,
        initialFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
        fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        player: "white",
        turns: 0,
        startedAtTurn: 0,
        status: {
            name: "outoftime",
            subtype: 3,
            result: 1,
            result_name: "истекло время"
        },
        event: "Regular game",
        createdAt: 1382477802183,
        createdBy: 34403,
        private: false,
        advance: false,
        winner: "white",
        lastMove: "c4b6",
        check: "d7",
        moveCentis: [
            14460952,
            171324,
            10758,
            231579,
            10235,
            434571,
            53997,
            163353591,
            1132424,
            232840442,
            1857190,
            8673964,
            2315214,
            189944741,
            5679727,
            59255732,
            3104265,
            431609350,
            1324380,
            103142492,
            782361,
            99869652,
            4739967,
            310479927,
            10071091,
            186806422,
            3448519,
            68206302,
            781838,
            353694575,
            1889502,
            84585291,
            775386,
            91457341,
            5972913,
            356221524,
            735809,
            13105839,
            738630,
            372376,
            2784805,
            130534977,
            797277,
            71822671,
            768034,
            95629929,
            751813,
            301868589,
            744641,
            103883,
            1307229,
            131590929,
            757956,
            249981680,
            736263,
            79585986,
            1109618
        ],
        opening: {
            code: "A00",
            name: "Start position"
        }
    },
    correspondence: {
        limit: "5 дней/ход",
        can_pause: true,
        parts: [
            {
                per: "move",
                initial: 432000000,
                increment: 0,
                min: 432000000
            }
        ],
        white: 0,
        black: 0,
        totalTime: 63330542000,
        lastMoveAt: 1445804744062,
        serverNow: 1610139742402
    },
    player: {
        color: "white",
        name: "Fish(ъ)",
        user: {
            id: 4250,
            name: "Fish(ъ)",
            display: "Fisher Кот",
            online: "none",
            perfs: {
                main: {
                    games: 12547,
                    rating: 1899,
                    avg: 1899
                }
            },
            language: "ru-RU",
            profile: {
                country: "RU"
            },
            patron: "bronze",
            status: "bronze",
            title: ""
        },
        rating: 1957
    },
    opponent: {
        color: "black",
        name: "4 roses",
        user: {
            id: 34403,
            name: "4 roses",
            display: "Владимир",
            online: false,
            perfs: {
                main: {
                    games: 168,
                    rating: 1708,
                    avg: 1703
                }
            },
            language: "ru-RU",
            profile: {
                country: "RU"
            },
            patron: "base",
            status: "base",
            title: ""
        },
        rating: 1711
    },
    orientation: "white",
    analysis: {
        state: "unanalysed"
    },
    treeParts: [
        {
            ply: 0,
            fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
        },
        {
            ply: 1,
            fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            id: "GwvneGVM",
            uci: "e2e4",
            san: "e4"
        },
        {
            ply: 2,
            fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            id: "OYQD+H6a",
            uci: "e7e5",
            san: "e5"
        },
        {
            ply: 3,
            fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            id: "BKrUZ0Je",
            uci: "g1f3",
            san: "Nf3"
        },
        {
            ply: 4,
            fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            id: "NV/kVU0x",
            uci: "b8c6",
            san: "Nc6"
        },
        {
            ply: 5,
            fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            id: "ElG7lw87",
            uci: "f1b5",
            san: "Bb5"
        },
        {
            ply: 6,
            fen: "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
            id: "EifBOCCc",
            uci: "g8f6",
            san: "Nf6"
        },
        {
            ply: 7,
            fen: "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
            id: "YZP8gIn4",
            uci: "d2d3",
            san: "d3"
        },
        {
            ply: 8,
            fen: "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5",
            id: "UpJfZELa",
            uci: "f8c5",
            san: "Bc5"
        },
        {
            ply: 9,
            fen: "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2PP1N2/PP3PPP/RNBQK2R b KQkq - 0 5",
            id: "hIoXd7a+",
            uci: "c2c3",
            san: "c3"
        },
        {
            ply: 10,
            fen: "r1bq1rk1/pppp1ppp/2n2n2/1Bb1p3/4P3/2PP1N2/PP3PPP/RNBQK2R w KQ - 1 6",
            id: "fCy+Ja2f",
            uci: "e8g8",
            san: "O-O"
        },
        {
            ply: 11,
            fen: "r1bq1rk1/pppp1ppp/2n2n2/1Bb1p3/4P3/2PP1N2/PP3PPP/RNBQ1RK1 b - - 2 6",
            id: "11o9mXMy",
            uci: "e1g1",
            san: "O-O"
        },
        {
            ply: 12,
            fen: "r1bq1rk1/ppp2ppp/2n2n2/1Bbpp3/4P3/2PP1N2/PP3PPP/RNBQ1RK1 w - - 0 7",
            id: "jzp9SY4Y",
            uci: "d7d5",
            san: "d5"
        },
        {
            ply: 13,
            fen: "r1bq1rk1/ppp2ppp/2n2n2/1Bbpp3/4P3/2PP1N2/PP1N1PPP/R1BQ1RK1 b - - 1 7",
            id: "Zf2pkZtE",
            uci: "b1d2",
            san: "Nbd2"
        },
        {
            ply: 14,
            fen: "r1bq1rk1/ppp2ppp/2n2n2/1Bb1p3/4p3/2PP1N2/PP1N1PPP/R1BQ1RK1 w - - 0 8",
            id: "tPBDwa4G",
            uci: "d5e4",
            san: "dxe4"
        },
        {
            ply: 15,
            fen: "r1bq1rk1/ppp2ppp/2n2n2/1Bb1p3/4P3/2P2N2/PP1N1PPP/R1BQ1RK1 b - - 0 8",
            id: "tUMHaPP/",
            uci: "d3e4",
            san: "dxe4"
        },
        {
            ply: 16,
            fen: "r1bq1rk1/1pp2ppp/2n2n2/pBb1p3/4P3/2P2N2/PP1N1PPP/R1BQ1RK1 w - - 0 9",
            id: "jRBvyjuX",
            uci: "a7a5",
            san: "a5"
        },
        {
            ply: 17,
            fen: "r1bq1rk1/1pp2ppp/2n2n2/pBb1p3/4P3/2P2N2/PP1NQPPP/R1B2RK1 b - - 1 9",
            id: "wMG9FVX1",
            uci: "d1e2",
            san: "Qe2"
        },
        {
            ply: 18,
            fen: "r1b2rk1/1pp1qppp/2n2n2/pBb1p3/4P3/2P2N2/PP1NQPPP/R1B2RK1 w - - 2 10",
            id: "EVln1Kt5",
            uci: "d8e7",
            san: "Qe7"
        },
        {
            ply: 19,
            fen: "r1b2rk1/1pp1qppp/2n2n2/pBb1p3/P3P3/2P2N2/1P1NQPPP/R1B2RK1 b - - 0 10",
            id: "jIbeHM5B",
            uci: "a2a4",
            san: "a4"
        },
        {
            ply: 20,
            fen: "r4rk1/1ppbqppp/2n2n2/pBb1p3/P3P3/2P2N2/1P1NQPPP/R1B2RK1 w - - 1 11",
            id: "EqZb/xD+",
            uci: "c8d7",
            san: "Bd7"
        },
        {
            ply: 21,
            fen: "r4rk1/1ppbqppp/2n2n2/pBb1p3/P3P3/1NP2N2/1P2QPPP/R1B2RK1 b - - 2 11",
            id: "QJd7M+dU",
            uci: "d2b3",
            san: "Nb3"
        },
        {
            ply: 22,
            fen: "r4rk1/1ppbqppp/1bn2n2/pB2p3/P3P3/1NP2N2/1P2QPPP/R1B2RK1 w - - 3 12",
            id: "lVTUBkKQ",
            uci: "c5b6",
            san: "Bb6"
        },
        {
            ply: 23,
            fen: "r4rk1/1ppbqppp/1bn2n2/pB2p1B1/P3P3/1NP2N2/1P2QPPP/R4RK1 b - - 4 12",
            id: "jrhN+Tc5",
            uci: "c1g5",
            san: "Bg5"
        },
        {
            ply: 24,
            fen: "r2r2k1/1ppbqppp/1bn2n2/pB2p1B1/P3P3/1NP2N2/1P2QPPP/R4RK1 w - - 5 13",
            id: "7xBizqCt",
            uci: "f8d8",
            san: "Rfd8"
        },
        {
            ply: 25,
            fen: "r2r2k1/1ppbqppp/1bn2n2/pB2p1B1/P3P3/2P2N2/1P1NQPPP/R4RK1 b - - 6 13",
            id: "3mHRfFzs",
            uci: "b3d2",
            san: "Nbd2"
        },
        {
            ply: 26,
            fen: "r2r2k1/nppbqppp/1b3n2/pB2p1B1/P3P3/2P2N2/1P1NQPPP/R4RK1 w - - 7 14",
            id: "9mS/YeGJ",
            uci: "c6a7",
            san: "Na7"
        },
        {
            ply: 27,
            fen: "r2r2k1/nppBqppp/1b3n2/p3p1B1/P3P3/2P2N2/1P1NQPPP/R4RK1 b - - 0 14",
            id: "3llguwiV",
            uci: "b5d7",
            san: "Bxd7"
        },
        {
            ply: 28,
            fen: "r5k1/npprqppp/1b3n2/p3p1B1/P3P3/2P2N2/1P1NQPPP/R4RK1 w - - 0 15",
            id: "DllkBepT",
            uci: "d8d7",
            san: "Rxd7"
        },
        {
            ply: 29,
            fen: "r5k1/npprqppp/1b3n2/p3p1B1/P1N1P3/2P2N2/1P2QPPP/R4RK1 b - - 1 15",
            id: "kbnliu5k",
            uci: "d2c4",
            san: "Nc4"
        },
        {
            ply: 30,
            fen: "r5k1/1pprqppp/1bn2n2/p3p1B1/P1N1P3/2P2N2/1P2QPPP/R4RK1 w - - 2 16",
            id: "anQ1iBl3",
            uci: "a7c6",
            san: "Nc6"
        },
        {
            ply: 31,
            fen: "r5k1/1pprqppp/1Nn2n2/p3p1B1/P3P3/2P2N2/1P2QPPP/R4RK1 b - - 0 16",
            id: "WslZThhu",
            uci: "c4b6",
            san: "Nxb6"
        },
        {
            ply: 32,
            fen: "r5k1/1p1rqppp/1pn2n2/p3p1B1/P3P3/2P2N2/1P2QPPP/R4RK1 w - - 0 17",
            id: "p4TefBO/",
            uci: "c7b6",
            san: "cxb6"
        },
        {
            ply: 33,
            fen: "r5k1/1p1rqppp/1pn2n2/p3p1B1/P3P3/2P5/1P1NQPPP/R4RK1 b - - 1 17",
            id: "sg+FDd24",
            uci: "f3d2",
            san: "Nd2"
        },
        {
            ply: 34,
            fen: "r5k1/1p1r1ppp/1pn1qn2/p3p1B1/P3P3/2P5/1P1NQPPP/R4RK1 w - - 2 18",
            id: "PQHonak6",
            uci: "e7e6",
            san: "Qe6"
        },
        {
            ply: 35,
            fen: "r5k1/1p1r1ppp/1pn1qn2/p3p1B1/P1N1P3/2P5/1P2QPPP/R4RK1 b - - 3 18",
            id: "J8SVpOyT",
            uci: "d2c4",
            san: "Nc4"
        },
        {
            ply: 36,
            fen: "r5k1/1p1rnppp/1p2qn2/p3p1B1/P1N1P3/2P5/1P2QPPP/R4RK1 w - - 4 19",
            id: "XApAe+PT",
            uci: "c6e7",
            san: "Ne7"
        },
        {
            ply: 37,
            fen: "r5k1/1p1rnppp/1p2qB2/p3p3/P1N1P3/2P5/1P2QPPP/R4RK1 b - - 0 19",
            id: "DIb7D4H5",
            uci: "g5f6",
            san: "Bxf6"
        },
        {
            ply: 38,
            fen: "r5k1/1p1rnppp/1p3q2/p3p3/P1N1P3/2P5/1P2QPPP/R4RK1 w - - 0 20",
            id: "yEqLQgYe",
            uci: "e6f6",
            san: "Qxf6"
        },
        {
            ply: 39,
            fen: "r5k1/1p1rnppp/1p3q2/p3p3/P1N1P3/2P5/1P2QPPP/R2R2K1 b - - 1 20",
            id: "+fHhEUfv",
            uci: "f1d1",
            san: "Rfd1"
        },
        {
            ply: 40,
            fen: "3r2k1/1p1rnppp/1p3q2/p3p3/P1N1P3/2P5/1P2QPPP/R2R2K1 w - - 2 21",
            id: "YSVZBVL5",
            uci: "a8d8",
            san: "Rad8"
        },
        {
            ply: 41,
            fen: "3r2k1/1p1Rnppp/1p3q2/p3p3/P1N1P3/2P5/1P2QPPP/R5K1 b - - 0 21",
            id: "jn1rTEMN",
            uci: "d1d7",
            san: "Rxd7"
        },
        {
            ply: 42,
            fen: "6k1/1p1rnppp/1p3q2/p3p3/P1N1P3/2P5/1P2QPPP/R5K1 w - - 0 22",
            id: "bgygSj/Y",
            uci: "d8d7",
            san: "Rxd7"
        },
        {
            ply: 43,
            fen: "6k1/1p1rnppp/1p3q2/p3p3/P1N1P3/2P5/1P2QPPP/3R2K1 b - - 1 22",
            id: "iyRat54o",
            uci: "a1d1",
            san: "Rd1"
        },
        {
            ply: 44,
            fen: "6k1/1p2nppp/1p3q2/p3p3/P1N1P3/2P5/1P2QPPP/3r2K1 w - - 0 23",
            id: "v8BkTQrM",
            uci: "d7d1",
            san: "Rxd1+"
        },
        {
            ply: 45,
            fen: "6k1/1p2nppp/1p3q2/p3p3/P1N1P3/2P5/1P3PPP/3Q2K1 b - - 0 23",
            id: "jiJfVlQP",
            uci: "e2d1",
            san: "Qxd1"
        },
        {
            ply: 46,
            fen: "6k1/1p2npp1/1p3q1p/p3p3/P1N1P3/2P5/1P3PPP/3Q2K1 w - - 0 24",
            id: "5NHg1NIz",
            uci: "h7h6",
            san: "h6"
        },
        {
            ply: 47,
            fen: "6k1/1p1Qnpp1/1p3q1p/p3p3/P1N1P3/2P5/1P3PPP/6K1 b - - 1 24",
            id: "szYGB/Ya",
            uci: "d1d7",
            san: "Qd7"
        },
        {
            ply: 48,
            fen: "6k1/1p1Qnpp1/1pq4p/p3p3/P1N1P3/2P5/1P3PPP/6K1 w - - 2 25",
            id: "OnGML6jZ",
            uci: "f6c6",
            san: "Qc6"
        },
        {
            ply: 49,
            fen: "6k1/1p2npp1/1pQ4p/p3p3/P1N1P3/2P5/1P3PPP/6K1 b - - 0 25",
            id: "ngi3PMPa",
            uci: "d7c6",
            san: "Qxc6"
        },
        {
            ply: 50,
            fen: "6k1/1p3pp1/1pn4p/p3p3/P1N1P3/2P5/1P3PPP/6K1 w - - 0 26",
            id: "BMIV71O9",
            uci: "e7c6",
            san: "Nxc6"
        },
        {
            ply: 51,
            fen: "6k1/1p3pp1/1pn4p/p3p3/P1N1P3/2P5/1P3PPP/5K2 b - - 1 26",
            id: "KxWUbp28",
            uci: "g1f1",
            san: "Kf1"
        },
        {
            ply: 52,
            fen: "5k2/1p3pp1/1pn4p/p3p3/P1N1P3/2P5/1P3PPP/5K2 w - - 2 27",
            id: "zNAPZVlN",
            uci: "g8f8",
            san: "Kf8"
        },
        {
            ply: 53,
            fen: "5k2/1p3pp1/1pn4p/p3p3/P1N1P3/2P5/1P2KPPP/8 b - - 3 27",
            id: "MnZXE2CP",
            uci: "f1e2",
            san: "Ke2"
        },
        {
            ply: 54,
            fen: "8/1p2kpp1/1pn4p/p3p3/P1N1P3/2P5/1P2KPPP/8 w - - 4 28",
            id: "5jkOt3ah",
            uci: "f8e7",
            san: "Ke7"
        },
        {
            ply: 55,
            fen: "8/1p2kpp1/1pn4p/p3p3/P1N1P3/2PK4/1P3PPP/8 b - - 5 28",
            id: "O376D6/P",
            uci: "e2d3",
            san: "Kd3"
        },
        {
            ply: 56,
            fen: "8/1p1k1pp1/1pn4p/p3p3/P1N1P3/2PK4/1P3PPP/8 w - - 6 29",
            id: "CTkCW0nZ",
            uci: "e7d7",
            san: "Kd7"
        },
        {
            ply: 57,
            fen: "8/1p1k1pp1/1Nn4p/p3p3/P3P3/2PK4/1P3PPP/8 b - - 0 29",
            id: "2gGVedcl",
            uci: "c4b6",
            san: "Nxb6+"
        }
    ],
    finalFen: "8/1p1k1pp1/1Nn4p/p3p3/P3P3/2PK4/1P3PPP/8 b - - 0 30",
    "pgn":"[Event \"Regular game\"]\n[Site \"https://www.chess-online.com/7333325\"]\n[Date \"2015.10.25\"]\n[Round \"?\"]\n[White \"Fish(ъ)\"]\n[Black \"4 roses\"]\n[Result \"1-0\"]\n[WhiteRating \"1957\"]\n[BlackRating \"1711\"]\n[ECO \"\"]\n[EventDate \"2013.10.22\"]\n[Termination \"time forfeit\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d5 7. Nbd2 dxe4 8.\ndxe4 a5 9. Qe2 Qe7 10. a4 Bd7 11. Nb3 Bb6 12. Bg5 Rfd8 13. Nbd2 Na7 14. Bxd7\nRxd7 15. Nc4 Nc6 16. Nxb6 cxb6 17. Nd2 Qe6 18. Nc4 Ne7 19. Bxf6 Qxf6 20. Rfd1\nRad8 21. Rxd7 Rxd7 22. Rd1 Rxd1+ 23. Qxd1 h6 24. Qd7 Qc6 25. Qxc6 Nxc6 26. Kf1\nKf8 27. Ke2 Ke7 28. Kd3 Kd7 29. Nxb6+ 1-0\n"
};

const preloadedState: GameRelatedState = {
    game: createGameState(data1)
}

const store = reduxCreateStore(
    combineReducers<GameRelatedState>({
        game: gameReducer
    }), preloadedState);


var props: AnalyseGraphProps = {
    store: store,
    height: 400
};

AnalyseGraphTest(document.getElementById("boardHere")!, props);