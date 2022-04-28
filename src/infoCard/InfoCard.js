import Icon from '../icon';

import {
  InfoCardStyles,
  IconStyles,
  LabelStyles,
  TitleStyles,
  SubtitleStyles,
  ImageStyles
} from './InfoCard.styles';

const InfoCard = (props) => {
  const {
    icon,
    label,
    title,
    variant = 'default',
    subtitle,
    img,
    children
  } = props;

  let iconVariant = variant;
  if (variant === 'warning') {
    iconVariant = 'error';
  }
  if (variant === 'info') {
    iconVariant = 'default';
  }

  return (
    <InfoCardStyles variant={variant}>
      {icon && (
        <IconStyles variant={variant}>
          <Icon icon={icon} variant={iconVariant} />
        </IconStyles>
      )}
      {img && <ImageStyles src={img} alt={title} />}
      <LabelStyles variant={variant}>{label}</LabelStyles>
      <TitleStyles variant={variant}>{title}</TitleStyles>
      {subtitle && (
        <SubtitleStyles variant={variant}>{subtitle}</SubtitleStyles>
      )}
      {children}
    </InfoCardStyles>
  );
};

export default InfoCard;
