import { AnalyseStore } from './AnalyseStore';

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