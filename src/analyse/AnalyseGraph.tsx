import * as React from 'react';
import { Observable } from 'rxjs';
import { SafeAnchor } from 'onix-ui'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
import { AnalysisResult } from "./AnalysisResult";

export interface AnalyseGraphProps {
    result?: AnalysisResult
    onRequestAnalyse?: () => void
}

export interface AnalyseGraphState {
    result?: AnalysisResult
}

export class AnalyseGraph extends React.Component<AnalyseGraphProps, AnalyseGraphState> {

    public constructor(props: AnalyseGraphProps) {
        super(props);

        this.state = {
            result: props.result
        };
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

    private requestAnalysis = () => {
        if (this.props.onRequestAnalyse) {
            this.props.onRequestAnalyse();
            const { state } = this;
            const { result } = state;
            result.state = "inprogress";

            this.setState({
                ...state,
                result: state.result
            });
        }
    }

    render() {
        const { result } = this.props;

        if (result && (result.state != "empty")) {
            if (result.state == "unanalysed") {
                return (
                    <span><SafeAnchor href="#" onClick={this.requestAnalysis}>Запросить анализ...</SafeAnchor></span>
                );
            } else if (result.state == "inprogress") {
                return (
                    <span>Партия анализируется... Обновите страницу через несколько минут.</span>
                );
            } else if (result.state == "ready") {
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <AreaChart data={result.analysis} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <XAxis dataKey="move" hide={true} />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip formatter={this.anTooltipValFmt} />
                            <Area type="monotone" dataKey="advantage" name="Advantage" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                );
            }
        }
        
        return (
            <span>Загрузка...</span>
        );
    }
}