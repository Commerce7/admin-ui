import React, { ReactNode } from 'react';

import { StyledInfoCardGrid } from './InfoCard.styles';

export interface InfoCardGridProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const InfoCardGrid = ({
  children = null,
  dataTestId = '',
  className = ''
}: InfoCardGridProps) => (
  <StyledInfoCardGrid data-testid={dataTestId} className={className}>
    {children}
  </StyledInfoCardGrid>
);

export default InfoCardGrid;
