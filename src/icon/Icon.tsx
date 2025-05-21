import React, { MouseEvent } from 'react';

import { StyledIcon, StyledIconButton } from './Icon.styles';
import * as Icons from './icons';

type IconVariant =
  | 'default'
  | 'success'
  | 'error'
  | 'text'
  | 'info'
  | 'warning';
export interface IconProps {
  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set the icon to use.
   */
  icon: string;

  /**
   * The label for the component.
   * This should be used when passing in an onClick prop, for accessibility reasons.
   */
  label?: string;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Set the size of the icon.
   */
  size?: number;

  /**
   * Set the visual property of the component.
   */
  variant?: IconVariant | string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Icon = ({
  className = '',
  icon,
  label = '',
  onClick,
  size = 18,
  variant = 'default',
  dataTestId = ''
}: IconProps) => {
  const IconComponent = Icons[icon as keyof typeof Icons];

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

Icon.displayName = 'Icon';

export default Icon;
