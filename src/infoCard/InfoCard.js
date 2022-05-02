import PropTypes from 'prop-types';

import Icon from '../icon';

import {
  StyledInfoCard,
  StyledIcon,
  StyledLabel,
  StyledTitle,
  StyledSubtitle,
  StyledImage
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
    <StyledInfoCard
      variant={variant}
      className={className}
      data-testid={dataTestId}
    >
      {icon && (
        <StyledIcon variant={variant}>
          <Icon icon={icon} variant={iconVariant} />
        </StyledIcon>
      )}
      {img && <StyledImage src={img} alt={title} />}
      <StyledLabel variant={variant}>{label}</StyledLabel>
      <StyledTitle variant={variant}>{title}</StyledTitle>
      {subtitle && (
        <StyledSubtitle variant={variant}>{subtitle}</StyledSubtitle>
      )}
      {children}
    </StyledInfoCard>
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
  label: PropTypes.node,

  /**
   * The title for the component.
   */
  title: PropTypes.node,

  /**
   * The subtitle for the component.
   */
  subtitle: PropTypes.node,

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
