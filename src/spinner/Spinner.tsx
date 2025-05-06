import React from 'react';

import Text from '../text';

import { StyledIcon, StyledSpinner } from './Spinner.styles';

export interface SpinnerProps {
  /**
   * Add a text label below spinner.
   */
  label?: string;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Spinner = ({
  label = '',
  className = '',
  dataTestId = ''
}: SpinnerProps) => (
  <StyledSpinner className={className} data-testid={dataTestId}>
    <StyledIcon icon="loading" />
    {label && <Text block>{label}</Text>}
  </StyledSpinner>
);

export default Spinner;
