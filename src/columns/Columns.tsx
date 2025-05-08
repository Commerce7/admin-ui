import React, { ReactNode } from 'react';

import { StyledColumns } from './Columns.styles';

export interface ColumnsProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Sets justify-content to this value.
   */
  justify?: string;

  /**
   * Sets align-items to this value.
   */
  align?: string;

  /**
   * Sets flex-wrap to this value.
   */
  wrap?: string;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Columns = ({
  children,
  justify = '',
  align = '',
  wrap = '',
  className = '',
  dataTestId = ''
}: ColumnsProps) => (
  <StyledColumns
    $justify={justify}
    $align={align}
    $isWrap={wrap}
    className={className}
    data-testid={dataTestId}
  >
    {children}
  </StyledColumns>
);

export default Columns;
