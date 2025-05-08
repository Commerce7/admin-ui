import React, { ReactNode, forwardRef } from 'react';

import { StyledTableWrapper, StyledTable } from './Table.styles';

export interface TableProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Add className for custom styling of the top div element containing the table
   */
  className?: string;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children = null, dataTestId = null, className = '' }, ref) => (
    <StyledTableWrapper className={className}>
      <StyledTable data-testid={dataTestId} ref={ref}>
        {children}
      </StyledTable>
    </StyledTableWrapper>
  )
);

Table.displayName = 'Table';

export default Table;
