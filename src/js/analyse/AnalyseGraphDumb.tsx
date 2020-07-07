import * as React from 'react';
import { Unsubscribe } from 'redux';
import { _, sprintf } from 'onix-core';
import { SafeAnchor, Container, Row, Col } from 'react-bootstrap';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import { dummyStore, gameRequestAnalysis, gameLoadAnalysis } from './AnalyseStore';
import * as analyseActions from './AnalyseActionConsts';
import { GameNavigateToPlyAction, NAVIGATE_TO_PLY } from "onix-chess/dist/actions/ChessActions";
import { register } from '../i18n';
import { AnalyseGraphProps } from './AnalyseGraphProps';
import { Color, Colors } from 'onix-chess';
import { IUserAnalysis } from './Interfaces';
import { AnalysisResult } from './AnalysisResult';

export class AnalyseGraphDumb extends React.Component<AnalyseGraphProps, any> {
    public static defaultProps: AnalyseGraphProps = {
        id: 0,
        store: dummyStore,
        height: 400,
        startPly: 0,
        ply: 0
    }

    private timer: any = null;

    private storeUnsubscribe: Unsubscribe | null = null;

    constructor(props: AnalyseGraphProps) {
        super(props);

        register();
    }

    componentDidMount() {
        const { store, id } = this.props;
        this.storeUnsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });

        const state = store.getState();
        if ((!state.analysis || state.analysis.status === "empty") && id) {
            gameLoadAnalysis(store, id);
        }
    }

    componentWillUnmount() {
        if (this.storeUnsubscribe) {
            this.storeUnsubscribe();
        }
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

    private requestAnalysis = () => {
        const { store, id } = this.props;
        gameRequestAnalysis(store, id);
    }

    private loadAnalysis = () => {
        const { store, id } = this.props;
        gameLoadAnalysis(store, id);
    }

    private moveToPly = (ply?: number) => {
        if (ply !== undefined) {
            const { store } = this.props;
            store.dispatch({ type: NAVIGATE_TO_PLY, ply: ply } as GameNavigateToPlyAction);
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

    private renderTotalItem = (color: Colors.BW, item: IUserAnalysis, analysis?: AnalysisResult) => {
        const makeLink = (type: "blunder" | "mistake" | "inaccuracy") => {
            return () => {
                if (analysis !== undefined) {
                    this.moveToPly(analysis.findNext(color, this.props.ply!, type));
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
        const { renderRequestBtn, renderProgress, handleClick, anTooltipValFmt, anTooltipLblFmt, renderTotalItem } = that;
        const { id, store, ply, height } = that.props;
        const state = store.getState();
        const { status, completed, white, black, result: evals } = state.analysis;

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
                                    { ply ? (<ReferenceLine x={ply} stroke="green" />) : null }
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