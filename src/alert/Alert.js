import PropTypes from 'prop-types';

import { StyledAlert, StyledIcon } from './Alert.styles';

const Alert = (props) => {
  const { variant, icon, size, children, className, dataTestId } = props;

  return (
    <StyledAlert
      className={className}
      variant={variant}
      data-testid={dataTestId}
      size={size}
    >
      <StyledIcon icon={icon} alertVariant={variant} alertSize={size} />
      <div>{children}</div>
    </StyledAlert>
  );
};

Alert.defaultProps = {
  children: null,
  className: null,
  variant: 'default',
  icon: 'infoCircle',
  size: 'default',
  dataTestId: null
};

Alert.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['default', 'info', 'error', 'warning', 'success']),

  /**
   * Set the size fo the component.
   */
  size: PropTypes.oneOf(['default', 'small']),

  /**
   * Set the icon of the component.
   */
  icon: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Alert;
