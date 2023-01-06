import PropTypes from 'prop-types';

import {
  StyledErrorMessage,
  StyledRequiredLabel,
  StyledFieldset,
  StyledFieldsetLabel
} from '../common/form/styles';

const RadioGroup = (props) => {
  const { children, errorMessage, label, required, dataTestId, variant } =
    props;

  const hasErrorMessage = !!errorMessage;
  const isButtonVariant = variant === 'button';

  return (
    <StyledFieldset data-testid={dataTestId} isButtonVariant={isButtonVariant}>
      {label && (
        <StyledFieldsetLabel>
          {label} {required && <StyledRequiredLabel />}
        </StyledFieldsetLabel>
      )}
      {children}
      {hasErrorMessage && (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      )}
    </StyledFieldset>
  );
};

RadioGroup.defaultProps = {
  errorMessage: null,
  label: null,
  required: false,
  dataTestId: null,
  variant: 'default'
};

RadioGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Show an error message and set the component styles to visually show an error
   */
  errorMessage: PropTypes.string,

  /**
   * The label for the component
   */
  label: PropTypes.string,

  /**
   * Set the element to be required.
   * This will show an asterik in the label and add 'required' to the DOM node
   */
  required: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * Radio Variant.
   */
  variant: PropTypes.oneOf(['button', 'default'])
};

export default RadioGroup;
