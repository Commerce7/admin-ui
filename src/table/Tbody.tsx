import React, { ReactNode, forwardRef } from 'react';

import { StyledTbody } from './Tbody.styles';

export interface TbodyProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Tbody = forwardRef<HTMLTableSectionElement, TbodyProps>(
  ({ children = null, className = '', dataTestId = null }, ref) => (
    <StyledTbody className={className} data-testid={dataTestId} ref={ref}>
      {children}
    </StyledTbody>
  )
);

Tbody.displayName = 'Tbody';

export default Tbody;
