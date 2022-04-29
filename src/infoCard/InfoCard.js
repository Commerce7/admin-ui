import PropTypes from 'prop-types';

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
    variant,
    subtitle,
    img,
    children,
    className,
    dataTestId
  } = props;

  let iconVariant = variant;
  if (variant === 'warning') {
    iconVariant = 'error';
  }
  if (variant === 'info') {
    iconVariant = 'default';
  }

  return (
    <InfoCardStyles
      variant={variant}
      className={className}
      data-testid={dataTestId}
    >
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

InfoCard.defaultProps = {
  children: null,
  className: null,
  dataTestId: null,
  icon: null,
  label: null,
  title: null,
  variant: 'default',
  subtitle: null,
  img: null
};

InfoCard.propTypes = {
  /**
   * The content of the component. If specified, will render below subtitle.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * Set the icon to use.
   */
  icon: PropTypes.string,

  /**
   * The label for the component.
   */
  label: PropTypes.string,

  /**
   * The title for the component.
   */
  title: PropTypes.string,

  /**
   * The subtitle for the component.
   */
  subtitle: PropTypes.string,

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['default', 'success', 'error', 'warning', 'info']),

  /**
   * Use an image in place of icon, generally you wouldn't want both an img prop and an icon prop.
   */
  img: PropTypes.string
};

export default InfoCard;
