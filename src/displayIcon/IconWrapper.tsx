import React, { ReactNode } from 'react';

import { DisplayIconVariant } from './DisplayIcon';
import { StyledDisplayIcon } from './DisplayIcon.styles';

interface IconWrapperProps {
  /**
   * The icon content to be wrapped
   */
  children: ReactNode;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Set the visual property of the component.
   */
  variant: DisplayIconVariant;
}

const IconWrapper = ({
  children,
  dataTestId = '',
  variant = 'default'
}: IconWrapperProps) => (
  <StyledDisplayIcon data-testid={dataTestId} variant={variant}>
    {children}
  </StyledDisplayIcon>
);

IconWrapper.displayName = 'IconWrapper';

export type { IconWrapperProps };
export default IconWrapper;
