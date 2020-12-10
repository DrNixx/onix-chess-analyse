import * as React from 'react';
import { Unsubscribe } from 'redux';
import { _, sprintf, Logger } from 'onix-core';
import { SafeAnchor, Container, Row, Col } from 'react-bootstrap';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import { register } from '../i18n';
import { AnalyseGraphProps } from './AnalyseGraphProps';
import { Color, Colors, GameActions, GameRelatedStore, IGameData, IUserAnalysis } from 'onix-chess';
import { AnalyseStatus, AnalysisResult } from './AnalysisResult';

export interface AnalyseState {
    analysis: AnalysisResult
}

export class AnalyseGraphDumb extends React.Component<AnalyseGraphProps, AnalyseState> {
    private id?: string | number;

    private store: GameRelatedStore;

    private timer: any = null;

    private storeUnsubscribe: Unsubscribe | null = null;

    constructor(props: AnalyseGraphProps) {
        super(props);

        register();

        const { store } = this.props;

        this.store = store;
        const { game } = store.getState();
        this.id = game?.engine.GameId;
        this.state = {
            analysis: new AnalysisResult(game?.engine.RawData)
        };
    }

    componentDidMount() {
        const { store, state } = this;
        const { analysis } = state;
        
        this.storeUnsubscribe = store.subscribe(() => {
            this.updateAnalysis();
        });

        if (analysis.state === "empty") {
            this.loadAnalysis();
        }
    }

    componentWillUnmount() {
        if (this.storeUnsubscribe) {
            this.storeUnsubscribe();
        }
    }

    private updateAnalysis = () => {
        const { store, state } = this;
        const { game } = store.getState();

        let analysis = new AnalysisResult(game?.engine.RawData);

        this.setState({
            analysis: analysis
        });
    };

    private requestAnalysis = () => {
        const that = this;
        const { store, state, id } = that;

        if (!id) return;

        fetch('https://www.chess-online.com/fishnet/create/' + id.toString(), {mode: "cors"})
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as json.
                return response.json();
            })
            .then(function() {
                const { analysis } = state;
                analysis.state = "inprogress";
                that.setState({
                    analysis: analysis
                });
            })
            .catch(function(error) {
                Logger.error('Looks like there was a problem when request analysis: \n', error);
            });
    }

    private loadAnalysis = () => {
        const that = this;
        const { store, state, id } = that;

        if (!id) return;

        fetch('https://www.chess-online.com/api/analyse/game/' + id.toString() + "?v=2", {mode: "cors"})
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                
                return response.json();
            })
            .then(function(responseAsJson) {
                if (responseAsJson) {
                    const data = responseAsJson as IGameData;
                    if (data.analysis?.state == "ready") {
                        store.dispatch({type: GameActions.GAME_LOAD_PARTIAL, game: responseAsJson} as GameActions.GameAction);
                    } else {
                        const { analysis } = state;
                        analysis.state = (data.analysis?.state ?? "inprogress") as AnalyseStatus;
                        analysis.completed = data.analysis?.completed ?? 0;
                        that.setState({
                            analysis: analysis
                        });
                    }   
                }
            })
            .catch(function(error) {
                Logger.error('Looks like there was a problem when load analysis: \n', error);
            });
    }

    private anTooltipValFmt = (...params: any[]) => {
        let obj = params[2];
        return (
            <span>
                <strong>{obj.payload.desc}</strong><br/>
                <span>{obj.payload.name}</span>
            </span>
        );
    }

    private anTooltipLblFmt = (...params: any[]) => {
        return "";
    }

    private moveToPly = (ply?: number) => {
        if (ply !== undefined) {
            this.store.dispatch({ type: GameActions.NAVIGATE_TO_PLY, ply: ply } as GameActions.GameAction);
        }
    };

    private handleClick = (data: any) => {
        const apl = data.activePayload;
        if (apl && apl[0]) {
            const pl = apl[0];
            if (pl && pl.payload) {
                this.moveToPly(pl.payload.ply);
            }
        }
    }

    renderProgress(progress: number) {
        const fmt = _("analyse", "completed");
        const progressStr = sprintf(fmt, progress);
        return (
            <span className="analysis-inprogress">
                { _("analyse", "inprogress")}
                { progress ? <span className="progress">{progressStr}</span> : null }
            </span>
        );
    }

    private renderRequestBtn = () => {
        const { requestAnalysis } = this;
        return (
            <span className="analysis-request">
                <SafeAnchor className="btn btn-info" tabIndex={-1} href="#" onClick={requestAnalysis}>{ _("analyse", "request")}</SafeAnchor>
            </span>
        );
    };

    private getCurrentPly = (): number => {
        const { game } = this.store.getState();
        return game?.engine.CurrentPlyCount ?? 0;
    }

    private renderTotalItem = (color: Colors.BW, item: IUserAnalysis, analysis?: AnalysisResult) => {
        const makeLink = (type: "blunder" | "mistake" | "inaccuracy") => {
            return () => {
                if (analysis !== undefined) {
                    this.moveToPly(analysis.findNext(color, this.getCurrentPly(), type));
                }
            };
        }

        return (
            <ul className="list-unstyled h-100 d-flex flex-column justify-content-center text-right">
                <li>
                    <SafeAnchor onClick={makeLink("inaccuracy")}>{ _("analyse", "inaccuracies")}:<label>{item.inaccuracy}</label></SafeAnchor>
                </li>
                <li>
                    <SafeAnchor onClick={makeLink("mistake")}>{ _("analyse", "mistakes")}:<label>{item.mistake}</label></SafeAnchor>
                </li>
                <li>
                    <SafeAnchor onClick={makeLink("blunder")}>{ _("analyse", "blunders")}:<label>{item.blunder}</label></SafeAnchor>
                </li>
                <li>
                    { _("analyse", "averageCentipawnLoss")}:<label title={_("analyse", "averageCentipawnLossTitle")}>{item.acpl}</label>
                </li>
            </ul>
        );
    }

    render() {
        const that = this;
        const { renderRequestBtn, renderProgress, handleClick, anTooltipValFmt, anTooltipLblFmt, renderTotalItem, props, state, store } = that;
        const { height } = props;
        const { game }  = store.getState();
        const { engine } = game;

        const { RawData: gameData, StartPlyCount: startPly, CurrentPlyCount: currentPly, GameId: id } = engine;
        const { analysis: evals } = state;
        const { state: status, completed, white, black } = evals;

        if (id && (status != "empty")) {
            if (status == "unanalysed") {
                return renderRequestBtn;
            } else if (status == "inprogress") {
                if (!that.timer) {
                    that.timer = setTimeout(() => {
                        that.timer = null;
                        that.loadAnalysis();
                    }, 5500);
                }
                
                return renderProgress(completed);
            } else if (status == "ready") {
                return (
                    <div className="analyse d-block d-lg-flex">
                        <div className="graph-container flex-grow-1">
                            <ResponsiveContainer width="100%" height={height}>
                                <AreaChart data={evals?.analysis} margin={{ top: 20, right: 20, left: 0, bottom: 0 }} onClick={handleClick}>
                                    <XAxis dataKey="ply" hide={true} />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip contentStyle={{ "fontSize": ".75rem" }} formatter={anTooltipValFmt} labelFormatter={anTooltipLblFmt} />
                                    <Area type="monotone" dataKey="advantage" name={ _("analyse", "advantage")} stroke="#8884d8" fill="#8884d8" />
                                    { currentPly ? (<ReferenceLine x={currentPly} stroke="green" />) : null }
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="graph-totals align-self-stretch">
                            <Container className="h-100">
                                <Row className="h-100">
                                    <Col xs={6} lg={12} className="white">
                                        { renderTotalItem(Color.White, white!, evals) }
                                    </Col>
                                    <Col xs={6} lg={12} className="black">
                                        { renderTotalItem(Color.Black, black!, evals) }
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                );
            }
        }
        
        return (
            <span className="analysis-loading">{ _("analyse", "loading")}</span>
        );
    }
}