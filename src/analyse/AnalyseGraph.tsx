import * as React from 'react';
import { Logger } from 'onix-core';
import { Unsubscribe } from 'redux';
import { SafeAnchor } from 'onix-ui'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
import { AnalysisResult } from './AnalysisResult';
import { AnalyseStore, gameRequestAnalysis, gameLoadAnalysis } from './AnalyseStore';

export interface AnalyseGraphProps {
    id: number,
    store: AnalyseStore,
    onPositionDotClick?: (ply: number) => void
}

export class AnalyseGraph extends React.Component<AnalyseGraphProps, any> {
    private storeUnsubscribe: Unsubscribe;

    constructor(props: AnalyseGraphProps) {
        super(props);
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

    private handleClick = (data, index) => {
        const apl = data.activePayload;
        if (apl && apl[0]) {
            const pl = apl[0];
            if (pl && pl.payload) {
                const { onPositionDotClick } = this.props;
                if (onPositionDotClick) {
                    onPositionDotClick(pl.payload.ply);
                }
            }
        }
    }

    render() {
        const { store } = this.props;
        const state = store.getState();

        Logger.debug('AnalyseGraph render', state);

        if (state.analysis.status != "empty") {
            if (state.analysis.status == "unanalysed") {
                return (
                    <span className="analysis-request">
                        <SafeAnchor className="btn btn-default" href="#" onClick={this.requestAnalysis}>Запросить анализ...</SafeAnchor>
                    </span>
                );
            } else if (state.analysis.status == "inprogress") {
                return (
                    <span className="analysis-inprogress">Партия анализируется... Обновите страницу через несколько минут.</span>
                );
            } else if (state.analysis.status == "ready") {
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <AreaChart data={state.analysis.evals} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} onClick={this.handleClick}>
                            <XAxis dataKey="move" hide={true} />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip formatter={this.anTooltipValFmt} labelFormatter={this.anTooltipLblFmt} />
                            <Area type="monotone" dataKey="advantage" name="Advantage" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                );
            }
        }
        
        return (
            <span className="analysis-loading">Загрузка...</span>
        );
    }
}