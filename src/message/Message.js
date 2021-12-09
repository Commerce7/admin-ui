import PropTypes from 'prop-types';

import { StyledMessage } from './Message.styles';

const Message = (props) => {
  const { variant, children, className, dataTestId } = props;

  return (
    <StyledMessage
      className={className}
      variant={variant}
      data-testid={dataTestId}
    >
      {children}
    </StyledMessage>
  );
};

Message.defaultProps = {
  children: null,
  className: null,
  variant: 'default',
  dataTestId: null
};

Message.propTypes = {
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
  variant: PropTypes.oneOf(['default', 'info', 'error', 'success', 'warning']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Message;
