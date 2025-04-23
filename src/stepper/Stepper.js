import PropTypes from 'prop-types';

import { StyledStepper } from './Stepper.styles';

const Stepper = (props) => {
  const { children = null, dataTestId = null, className = null } = props;
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

Stepper.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Stepper;
