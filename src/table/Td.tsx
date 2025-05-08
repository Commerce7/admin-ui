import React, { ReactNode, MouseEvent, forwardRef } from 'react';

import { StyledTd } from './Td.styles';

type TdAlign = 'left' | 'center' | 'right';

export interface TdProps {
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
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLTableCellElement>) => void;

  /**
   * Set the text alignment of the cell.
   */
  align?: TdAlign;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Td = forwardRef<HTMLTableCellElement, TdProps>(
  (
    {
      children = null,
      className = '',
      onClick,
      colSpan,
      align = 'left',
      dataTestId = ''
    },
    ref
  ) => (
    <StyledTd
      colSpan={colSpan}
      onClick={onClick}
      align={align}
      className={className}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </StyledTd>
  )
);

Td.displayName = 'Td';

export default Td;
