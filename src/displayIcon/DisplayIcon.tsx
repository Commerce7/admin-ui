import React, { MouseEvent } from 'react';

import { StyledIconButton } from '../icon/Icon.styles';
import * as Icons from '../icon/icons';

import { StyledIcon } from './DisplayIcon.styles';
import IconWrapper from './IconWrapper';

export type DisplayIconVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export interface DisplayIconProps {
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
   * Set the visual property of the component.
   */
  variant?: DisplayIconVariant;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const DisplayIcon = ({
  className = '',
  icon,
  label = '',
  onClick,
  variant = 'default',
  dataTestId = ''
}: DisplayIconProps) => {
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
        <IconWrapper variant={variant}>
          <StyledIcon
            as={IconComponent}
            variant={variant}
            className={className}
          />
        </IconWrapper>
      </StyledIconButton>
    );
  }

  return (
    <IconWrapper dataTestId={dataTestId} variant={variant}>
      <StyledIcon
        as={IconComponent}
        variant={variant}
        className={className}
        aria-label={label}
      />
    </IconWrapper>
  );
};

DisplayIcon.displayName = 'DisplayIcon';

export default DisplayIcon;
