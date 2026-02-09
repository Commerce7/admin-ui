import React, { ReactNode } from 'react';

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
}

const Alert = ({
  variant = 'default',
  icon = 'infoCircle',
  size = 'default',
  children = null,
  className = '',
  dataTestId = '',
  href = ''
}: AlertProps) => {
  if (href) {
    return (
      <StyledAlertLink
        href={href}
        data-testid={dataTestId}
        className={className}
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
