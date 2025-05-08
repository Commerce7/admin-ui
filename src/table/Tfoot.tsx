import React, { ReactNode, forwardRef } from 'react';

import { StyledTfoot } from './Tfoot.styles';

export interface TfootProps {
  /**
   * The content of the component
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

const Tfoot = forwardRef<HTMLTableSectionElement, TfootProps>(
  ({ children, className = '', dataTestId = '' }, ref) => (
    <StyledTfoot className={className} data-testid={dataTestId} ref={ref}>
      {children}
    </StyledTfoot>
  )
);

Tfoot.displayName = 'Tfoot';

export default Tfoot;
