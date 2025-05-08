import React, { forwardRef, ReactNode } from 'react';

import { StyledDropdownWrapper } from './DropdownWrapper.styles';

interface DropdownWrapperProps {
  /**
   * The content of the wrapper
   */
  children: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing
   */
  dataTestId?: string;
}

const DropdownWrapper = forwardRef<HTMLDivElement, DropdownWrapperProps>(
  ({ children, className = '', dataTestId = null }, ref) => (
    <StyledDropdownWrapper
      className={className}
      ref={ref}
      data-testid={dataTestId}
    >
      {children}
    </StyledDropdownWrapper>
  )
);

DropdownWrapper.displayName = 'DropdownWrapper';

export default DropdownWrapper;
