import * as React from 'react';
import { Unsubscribe } from 'redux';
import { Intl as IntlCore, sprintf } from 'onix-core';
import { SafeAnchor } from 'onix-ui'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import { AnalysisResult } from './AnalysisResult';
import { AnalyseStore, gameRequestAnalysis, gameLoadAnalysis } from './AnalyseStore';
import * as analyseActions from './AnalyseActionConsts';
import { AnalysePositionAction } from "./AnalyseActions";
import { Intl } from '../Intl';

export interface AnalyseGraphProps {
    id: number,
    store: AnalyseStore,
    height?: number,
    colorWhite?: string,
    colorBlack?: string,
    startPly?: number,
    currentPly?: number,
    onPositionDotClick?: (ply: number) => void
}

export class AnalyseGraph extends React.Component<AnalyseGraphProps, any> {
    public static defaultProps: AnalyseGraphProps = {
        id: 0,
        store: null,
        height: 400,
        colorWhite: "#f0d9b5",
        colorBlack: "#b58863",
        startPly: 0,
        currentPly: 0,
        onPositionDotClick: (ply) => { }
    }    

    private storeUnsubscribe: Unsubscribe;

    constructor(props: AnalyseGraphProps) {
        super(props);

        Intl.register();
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
        this.storeUnsubscribe();
    }

    private anTooltipValFmt = (...params) => {
        let obj = params[2];
        return (
            <span>
                <span>{obj.payload.desc}</span><br/>
                <span>{obj.payload.name}</span>
            </span>
        );
    }

    private anTooltipLblFmt = (...params) => {
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

    private handleClick = (data, index) => {
        const apl = data.activePayload;
        if (apl && apl[0]) {
            const pl = apl[0];
            if (pl && pl.payload) {
                const { store } = this.props;
                store.dispatch({ type: analyseActions.ANALYSE_POSITION, ply: pl.payload.ply } as AnalysePositionAction);
            }
        }
    }

    renderProgress(progress: number) {
        const fmt = IntlCore.t("analyse", "completed");
        const progressStr = sprintf(fmt, process);
        return (
            <span className="analysis-inprogress">
                {IntlCore.t("analyse", "inprogress")}
                { progress ? <span className="progress">{progressStr}</span> : null }
            </span>
        );
    }

    render() {
        const that = this;
        const { store, currentPly, colorWhite, colorBlack, height } = that.props;
        const state = store.getState();
        const { status, completed, white, black, evals} = state.analysis;

        if (status != "empty") {
            if (status == "unanalysed") {
                return (
                    <span className="analysis-request">
                        <SafeAnchor className="btn btn-info" href="#" onClick={that.requestAnalysis}>{IntlCore.t("analyse", "request")}</SafeAnchor>
                    </span>
                );
            } else if (status == "inprogress") {
                setTimeout(() => {
                    that.loadAnalysis();
                }, 5500);
                return that.renderProgress(completed);
            } else if (status == "ready") {
                return (
                    <div className="analyse">
                        <div className="graph-container">
                            <ResponsiveContainer width="100%" height={height}>
                                <AreaChart data={evals} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} onClick={that.handleClick}>
                                    <XAxis dataKey="ply" hide={true} />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip formatter={that.anTooltipValFmt} labelFormatter={that.anTooltipLblFmt} />
                                    <Area type="monotone" dataKey="advantage" name={IntlCore.t("analyse", "advantage")} stroke="#8884d8" fill="#8884d8" />
                                    { currentPly ? (<ReferenceLine x={currentPly} stroke="green" />) : null }
                                    
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="graph-info">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12 white" style={{ backgroundColor: colorWhite}}>
                                    <span>{IntlCore.t("analyse", "inaccuracies")}:<span>{white.inaccuracy}</span></span>
                                    <span>{IntlCore.t("analyse", "mistakes")}:<span>{white.mistake}</span></span>
                                    <span>{IntlCore.t("analyse", "blunders")}:<span>{white.blunder}</span></span>
                                    <span>{IntlCore.t("analyse", "averageCentipawnLoss")}:<span>{white.acpl}</span></span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12 black" style={{ backgroundColor: colorBlack}}>
                                    <span>{IntlCore.t("analyse", "inaccuracies")}:<span>{black.inaccuracy}</span></span>
                                    <span>{IntlCore.t("analyse", "mistakes")}:<span>{black.mistake}</span></span>
                                    <span>{IntlCore.t("analyse", "blunders")}:<span>{black.blunder}</span></span>
                                    <span>{IntlCore.t("analyse", "averageCentipawnLoss")}:<span>{black.acpl}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                );
            }
        }
        
        return (
            <span className="analysis-loading">{IntlCore.t("analyse", "loading")}</span>
        );
    }
}