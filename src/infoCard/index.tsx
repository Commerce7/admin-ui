import InfoCardBase, { InfoCardProps } from './InfoCard';
import InfoCardGrid, { InfoCardGridProps } from './InfoCardGrid';

const InfoCard = Object.assign(InfoCardBase, { InfoCardGrid });

export type { InfoCardProps, InfoCardGridProps };

export default InfoCard;
