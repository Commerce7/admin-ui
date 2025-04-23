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
    icon = null,
    label = null,
    title = null,
    variant = 'default',
    subtitle = null,
    img = null,
    children = null,
    className = null,
    dataTestId = null,
    iconVariant = null
  } = props;
  const theme = useTheme();

  let iconVariantVar = variant;
  if (['warning', 'default'].includes(variant)) {
    iconVariantVar = 'text';
  }
  if (['error', 'success', 'info'].includes(variant)) {
    iconVariantVar = 'white';
  }
  if (iconVariant) {
    iconVariantVar = iconVariant;
  }

  let iconBackgroundVariant =
    colors[theme.c7__ui.mode].iconBackgroundColor[variant];
  if (iconVariant) {
    iconBackgroundVariant = backgroundColors[theme.c7__ui.mode][iconVariant];
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
            <Icon size={24} icon={icon} variant={iconVariantVar} />
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
   * Allows overriding the icon color and icon background color.
   */
  iconVariant: PropTypes.oneOf([
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
