import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

import Icon from '../icon';
import { backgroundColors } from '../icon/theme';

import {
  StyledInfoCard,
  StyledContentWrapper,
  StyledIcon,
  StyledLabel,
  StyledTitle,
  StyledSubtitle,
  StyledImage
} from './InfoCard.styles';
import { colors } from './theme';

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
    dataTestId,
    iconVariantOverride,
    iconBackgroundVariantOverride
  } = props;
  const theme = useTheme();

  let iconVariant = variant;
  if (['warning', 'default'].includes(variant)) {
    iconVariant = 'text';
  }
  if (['error', 'success', 'info'].includes(variant)) {
    iconVariant = 'white';
  }
  if (iconVariantOverride) {
    iconVariant = iconVariantOverride;
  }

  let iconBackgroundVariant =
    colors[theme.c7__ui.mode].iconBackgroundColor[variant];
  if (iconBackgroundVariantOverride) {
    iconBackgroundVariant =
      backgroundColors[theme.c7__ui.mode][iconBackgroundVariantOverride];
  }

  return (
    <StyledInfoCard
      variant={variant}
      className={className}
      data-testid={dataTestId}
    >
      <div>
        {icon && (
          <StyledIcon variant={iconBackgroundVariant}>
            <Icon size={24} icon={icon} variant={iconVariant} />
          </StyledIcon>
        )}
        {img && <StyledImage src={img} alt={title} />}
      </div>
      <StyledContentWrapper>
        {label && <StyledLabel variant={variant}>{label}</StyledLabel>}
        {title && <StyledTitle variant={variant}>{title}</StyledTitle>}
        {subtitle && (
          <StyledSubtitle block small variant={variant}>
            {subtitle}
          </StyledSubtitle>
        )}
        {children}
      </StyledContentWrapper>
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
  iconVariantOverride: null,
  iconBackgroundVariantOverride: null,
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
   * Allows overriding the icon variant.
   */
  iconVariantOverride: PropTypes.oneOf([
    'default',
    'success',
    'error',
    'warning',
    'info'
  ]),

  /**
   * Allows overriding the icon background variant.
   */
  iconBackgroundVariantOverride: PropTypes.oneOf([
    'default',
    'success',
    'error',
    'warning',
    'info'
  ]),

  /**
   * Use an image in place of icon, generally you wouldn't want both an img prop and an icon prop.
   */
  img: PropTypes.string
};

export default InfoCard;
