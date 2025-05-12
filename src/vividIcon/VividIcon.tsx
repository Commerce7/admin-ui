import React, { MouseEvent } from 'react';

import { StyledIconButton } from '../icon/Icon.styles';

import { StyledIconContainer, StyledIcon } from './VividIcon.styles';

type VividIconColor = 'pink' | 'blue' | 'green' | 'teal' | 'orange' | 'purple';

export interface VividIconProps {
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
  color?: VividIconColor;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const VividIcon = ({
  className = '',
  label = '',
  onClick,
  icon,
  color = 'pink',
  dataTestId = ''
}: VividIconProps) => {
  if (onClick) {
    return (
      <StyledIconButton
        onClick={onClick}
        type="button"
        aria-label={label}
        title={label}
        data-testid={dataTestId}
      >
        <StyledIconContainer color={color} className={className}>
          <StyledIcon icon={icon} size={20} color={color} />
        </StyledIconContainer>
      </StyledIconButton>
    );
  }

  return (
    <StyledIconContainer
      color={color}
      className={className}
      data-testid={dataTestId}
    >
      <StyledIcon icon={icon} size={20} color={color} />
    </StyledIconContainer>
  );
};

VividIcon.displayName = 'VividIcon';

export default VividIcon;
