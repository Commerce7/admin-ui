import PropTypes from 'prop-types';

import {
  StyledErrorMessage,
  StyledRequiredLabel,
  StyledFieldset,
  StyledFieldsetLabel
} from '../common/form/styles';

const CheckboxGroup = (props) => {
  const { children, errorMessage, label, required, dataTestId } = props;

  const hasErrorMessage = !!errorMessage;

  return (
    <StyledFieldset data-testid={dataTestId}>
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

CheckboxGroup.defaultProps = {
  errorMessage: null,
  label: null,
  required: false,
  dataTestId: null
};

CheckboxGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Show an error message and set the component styles to visually show an error.
   */
  errorMessage: PropTypes.string,

  /**
   * The label for the component.
   */
  label: PropTypes.string,

  /**
   * Set the element to be required.
   * This will show an asterik in the label and add 'required' to the DOM node.
   */
  required: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default CheckboxGroup;
