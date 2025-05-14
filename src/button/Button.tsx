import React, { forwardRef, ReactNode, MouseEvent } from 'react';

import {
  StyledButton,
  StyledButtonText,
  StyledLoadingIcon,
  StyledButtonIcon
} from './Button.styles';

type ButtonSize = 'default' | 'small';
export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'link';
type ButtonType = 'button' | 'submit';

interface ButtonProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set the element to disabled.
   */
  disabled?: boolean;

  /**
   * Set the button to visually show a loading spinner.
   * This will also disable the button.
   * This prop is intended to be used during asynchronous actions, like submitting a form.
   */
  loading?: boolean;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Control the size of the button
   */
  size?: ButtonSize;

  /**
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  startIcon?: string;

  /**
   * Add an icon to the end of the element.
   */
  endIcon?: string;

  /**
   * Adds a type to the button DOM element.
   */
  type?: ButtonType;

  /**
   * Set the visual property of the component.
   */
  variant?: ButtonVariant;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * When it is true, specifies that the <input> element should not be validated when submitted.
   * Use this when you have custom validation on your form
   */
  formNoValidate?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children = null,
      className = '',
      disabled = false,
      loading = false,
      onClick = undefined,
      startIcon = null,
      endIcon = null,
      type = 'button',
      variant = 'primary',
      size = 'default',
      dataTestId = null,
      formNoValidate = false
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      className={className}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      data-testid={dataTestId}
      formNoValidate={formNoValidate}
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
  )
);

Button.displayName = 'Button';

export default Button;
