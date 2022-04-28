import { InfoCardGridStyles } from './InfoCard.styles';

const InfoCardGrid = (props) => {
  const { children } = props;
  return <InfoCardGridStyles>{children}</InfoCardGridStyles>;
};

export default InfoCardGrid;
