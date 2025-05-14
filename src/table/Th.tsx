import React, { ReactNode, forwardRef } from 'react';

import { StyledTh } from './Th.styles';

type ThAlign = 'left' | 'center' | 'right';

export interface ThProps {
  /**
   * Set the text alignment of the cell.
   */
  align?: ThAlign;

  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set the colSpan of the cell.
   */
  colSpan?: number;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Th = forwardRef<HTMLTableCellElement, ThProps>(
  (
    {
      children = null,
      className = '',
      align = 'left',
      colSpan,
      dataTestId = null
    },
    ref
  ) => (
    <StyledTh
      align={align}
      className={className}
      colSpan={colSpan}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </StyledTh>
  )
);

Th.displayName = 'Th';

export default Th;
