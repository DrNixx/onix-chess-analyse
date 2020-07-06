import { AnalyseStore } from './AnalyseStore';

export interface AnalyseGraphProps {
    id: number;
    store: AnalyseStore;
    height?: number;
    startPly?: number;
    ply?: number;
}
