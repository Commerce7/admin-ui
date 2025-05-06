/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, forwardRef, MouseEvent, ReactNode } from 'react';

import {
  StyledButton,
  StyledButtonIcon,
  StyledButtonText,
  StyledLoadingIcon
} from '../button/Button.styles';

export interface LinkButtonProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component?: ComponentType<any> | string;

  /**
   * Set the element to disabled.
   */
  disabled?: boolean;

  /**
   * Add download to the dom element
   */
  download?: boolean;

  /**
   * Set the button to visually show a loading spinner.
   * This will also disable the button.
   */
  loading?: boolean;

  /**
   * The url to link to.
   */
  href?: string;

  /**
   * Set the rel property of the link
   */
  rel?: string;

  /**
   * Control the size of the button
   */
  size?: 'default' | 'small';

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
   * Set the window to open the link in.
   * If this field is set to '_blank', the rel prop should be set to 'noopener noreferrer' for security reasons.
   */
  target?: string;

  /**
   * Set the visual property of the component.
   */
  variant?: 'primary' | 'secondary' | 'text' | 'link';

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;

  [key: string]: any;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children = null,
      className = '',
      component = null,
      disabled = false,
      download = null,
      loading = false,
      href = null,
      rel = null,
      startIcon = null,
      endIcon = null,
      target = null,
      variant = 'primary',
      size = 'default',
      dataTestId = null,
      onClick,
      ...rest
    },
    ref
  ) => {
    let as: any = 'a';
    let customComponentProps = {};

    if (component) {
      as = component;
      customComponentProps = { ...rest };
    }

    return (
      <StyledButton
        as={disabled || loading ? null : as}
        ref={ref}
        className={className}
        disabled={disabled || loading}
        href={href}
        target={target}
        rel={rel}
        variant={variant}
        size={size}
        download={download}
        data-testid={dataTestId}
        onClick={onClick}
        {...customComponentProps}
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
  }
);

LinkButton.displayName = 'LinkButton';

export default LinkButton;
