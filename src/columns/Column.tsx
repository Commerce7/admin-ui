import React, { ReactNode } from 'react';

import { StyledColumn } from './Columns.styles';

type ColumnSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'none'
  | 'auto';

export interface ColumnProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * The span of this column out of 12.
   */
  span?: ColumnSpan;
}

const Column = ({ children = '', span = 12 }: ColumnProps) => (
  <StyledColumn $span={span}>{children}</StyledColumn>
);

export default Column;
