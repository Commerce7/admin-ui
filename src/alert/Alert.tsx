import React, { ComponentType, ReactNode } from 'react';

import { StyledAlert, StyledIcon, StyledAlertLink } from './Alert.styles';

export type AlertVariant = 'default' | 'info' | 'error' | 'warning' | 'success';
type AlertSize = 'default' | 'small';

export interface AlertProps {
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
   * Set the visual property of the component.
   */
  variant?: AlertVariant;

  /**
   * Set the size of the component.
   */
  size?: AlertSize;

  /**
   * Set the icon of the component.
   */
  icon?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Optional URL to make the alert content clickable.
   */
  href?: string;

  [key: string]: any;
}

const Alert = ({
  variant = 'default',
  icon = 'infoCircle',
  size = 'default',
  children = null,
  className = '',
  component,
  dataTestId = '',
  href = '',
  ...rest
}: AlertProps) => {
  const isClickable = href || component;

  if (isClickable) {
    let as: any = 'a';
    let customComponentProps = {};

    if (component) {
      as = component;
      customComponentProps = { ...rest };
    }

    return (
      <StyledAlertLink
        as={as}
        href={href}
        data-testid={dataTestId}
        className={className}
        {...customComponentProps}
      >
        <StyledAlert variant={variant} size={size}>
          <StyledIcon icon={icon} alertVariant={variant} alertSize={size} />
          <div>{children}</div>
        </StyledAlert>
      </StyledAlertLink>
    );
  }

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

export default Alert;
