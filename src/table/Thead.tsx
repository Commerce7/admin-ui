import React, { ReactNode, forwardRef } from 'react';

import { StyledThead } from './Thead.styles';

interface TheadProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
  ({ children, className = '', dataTestId = '' }, ref) => (
    <StyledThead className={className} data-testid={dataTestId} ref={ref}>
      {children}
    </StyledThead>
  )
);

Thead.displayName = 'Thead';

export type { TheadProps };
export default Thead;
