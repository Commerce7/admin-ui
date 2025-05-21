import React, { ReactNode } from 'react';

import { StyledStepper } from './Stepper.styles';

export interface StepperProps {
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

const Stepper = (props: StepperProps) => {
  const { children = null, dataTestId = null, className = '' } = props;

  return (
    <StyledStepper
      aria-label="Secondary navigation"
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </StyledStepper>
  );
};

export default Stepper;
