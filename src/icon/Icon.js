import PropTypes from 'prop-types';
import * as Icons from './icons';
import { StyledIcon, StyledIconButton } from './Icon.styles';

import IconWrapper from './IconWrapper';

const Icon = (props) => {
  const { className, icon, label, onClick, size, variant, dataTestId } = props;

  const IconComponent = Icons[icon];

  if (!IconComponent) return null;

  if (onClick) {
    return (
      <StyledIconButton
        onClick={onClick}
        type="button"
        aria-label={label}
        title={label}
        data-testid={dataTestId}
      >
        <IconWrapper size={size}>
          <StyledIcon
            as={IconComponent}
            variant={variant}
            className={className}
            size={size}
          />
        </IconWrapper>
      </StyledIconButton>
    );
  }

  return (
    <IconWrapper size={size} dataTestId={dataTestId}>
      <StyledIcon
        as={IconComponent}
        variant={variant}
        className={className}
        dataTestId={dataTestId}
        aria-label={label}
        size={size}
      />
    </IconWrapper>
  );
};

Icon.defaultProps = {
  className: null,
  label: null,
  onClick: null,
  size: 'default',
  variant: 'default'
};

Icon.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set the icon to use.
   */
  icon: PropTypes.string.isRequired,

  /**
   * The label for the component.
   * This should be used when passing in an onClick prop, for accessibility reasons.
   */
  label: PropTypes.string,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Set the size of the icon.
   */
  size: PropTypes.oneOf(['default', 'large']),

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['default', 'success', 'error'])
};

export default Icon;
