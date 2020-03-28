import * as React from 'react';
import * as Loadable from "react-loadable";
import { AnalyseGraphProps } from './AnalyseGraphProps';

const LoadableGraph = Loadable({
    loader: () => import(/* webpackChunkName: "analysisGraph" */ './AnalyseGraphDumb'),
    render(loaded: any, props: AnalyseGraphProps) {
        let Component = loaded.AnalyseGraphDumb;
        return <Component {...props} />;
    },
    loading() {
      return <div className="progress-circle-indeterminate text-hide">Loading...</div>
    }
});

export class AnalyseGraphAsync extends React.Component<AnalyseGraphProps, {}> {
    render() {
        return <LoadableGraph {...this.props} />
    }
}
