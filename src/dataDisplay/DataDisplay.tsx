import React, { ReactNode } from 'react';

import { StyledInputWrapper } from '../common/form/styles';

import {
  StyledDataDisplayLabel,
  StaticDataDisplayStyles
} from './DataDisplay.styles';

export interface DataDisplayProps {
  /**
   * The contents of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * The label for the component.
   */
  label: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const DataDisplay = ({
  children = '',
  className = '',
  label,
  dataTestId = ''
}: DataDisplayProps) => (
  <StyledInputWrapper className={className} data-testid={dataTestId}>
    <StyledDataDisplayLabel>{label}</StyledDataDisplayLabel>
    <StaticDataDisplayStyles>{children}</StaticDataDisplayStyles>
  </StyledInputWrapper>
);

export default DataDisplay;
