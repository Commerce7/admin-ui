import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import {
  StyledButton,
  StyledButtonText,
  StyledLoadingIcon,
  StyledButtonIcon
} from './Button.styles';

const Button = forwardRef((props, ref) => {
  const {
    children,
    className,
    disabled,
    loading,
    onClick,
    startIcon,
    endIcon,
    type,
    variant,
    size,
    dataTestId,
    formnovalidate
  } = props;

  return (
    <StyledButton
      ref={ref}
      className={className}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      data-testid={dataTestId}
      formNoValidate={formnovalidate}
    >
      <StyledButtonText isLoading={loading}>
        {startIcon && (
          <StyledButtonIcon
            buttonVariant={variant}
            icon={startIcon}
            position="start"
            isHidden={loading}
            hasChildren={children !== null}
          />
        )}
        {loading && <StyledLoadingIcon icon="loading" />}
        {children}
        {endIcon && (
          <StyledButtonIcon
            buttonVariant={variant}
            icon={endIcon}
            position="end"
            isHidden={loading}
            hasChildren={children !== null}
          />
        )}
      </StyledButtonText>
    </StyledButton>
  );
});

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  loading: false,
  onClick: null,
  startIcon: null,
  type: 'button',
  variant: 'primary',
  size: 'default',
  dataTestId: null,
  formnovalidate: false
};

Button.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set the element to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Set the button to visually show a loading spinner.
   * This will also disable the button.
   * This prop is intended to be used during asynchronous actions, like submitting a form.
   */
  loading: PropTypes.bool,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Control the size of the button
   */
  size: PropTypes.oneOf(['default', 'small']),

  /**
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  startIcon: PropTypes.string,

  /**
   * Adds a type to the button DOM element.
   */
  type: PropTypes.oneOf(['button', 'submit']),

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'text', 'link']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * When it is true, it specifies that the <input> element should not be validated when submitted.
   * Use this when you have custom validation on your form
   */
  formnovalidate: PropTypes.bool
};

export default Button;
