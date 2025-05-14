import React, { ReactNode, MouseEvent, forwardRef } from 'react';

import { StyledTr } from './Tr.styles';

export interface TrProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLTableRowElement>) => void;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Tr = forwardRef<HTMLTableRowElement, TrProps>(
  ({ children = null, className = '', onClick, dataTestId = null }, ref) => (
    <StyledTr
      onClick={onClick}
      className={className}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </StyledTr>
  )
);

Tr.displayName = 'Tr';

export default Tr;
