import Step, { StepProps } from './Step';
import StepperComponent, { StepperProps } from './Stepper';

const Stepper = Object.assign(StepperComponent, { Step });

export type { StepperProps, StepProps };

export default Stepper;
