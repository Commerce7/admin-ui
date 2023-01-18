import PropTypes from 'prop-types';

import { StyledIcon, StyledIconButton } from './Icon.styles';
import * as Icons from './icons';

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
        <StyledIcon
          as={IconComponent}
          variant={variant}
          className={className}
          size={size}
        />
      </StyledIconButton>
    );
  }

  return (
    <StyledIcon
      as={IconComponent}
      variant={variant}
      className={className}
      dataTestId={dataTestId}
      aria-label={label}
      size={size}
    />
  );
};

Icon.defaultProps = {
  className: null,
  label: null,
  onClick: null,
  size: 18,
  variant: 'default',
  dataTestId: null
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
  size: PropTypes.number,

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['default', 'success', 'error', 'text']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Icon;
