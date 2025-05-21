import React from 'react';

import { LineBreakStyles } from './LineBreak.styles';

export interface LineBreakProps {
  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const LineBreak = ({ className = '', dataTestId = '' }: LineBreakProps) => (
  <LineBreakStyles className={className} data-testid={dataTestId} />
);

export default LineBreak;
