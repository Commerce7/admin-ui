import { StepperStyles } from './Stepper.styles';

const Stepper = (props) => {
  const { children } = props;
  return <StepperStyles>{children}</StepperStyles>;
};

export default Stepper;
