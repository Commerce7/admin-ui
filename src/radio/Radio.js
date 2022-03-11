import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledToggleLabel,
  StyledToggleText,
  StyledRequiredLabel,
  StyledHiddenInput,
  StyledDescription
} from '../common/form/styles';

import { StyledRadio } from './Radio.styles';

const Radio = forwardRef((props, ref) => {
  const {
    checked,
    className,
    description,
    disabled,
    errorMessage,
    id,
    label,
    onChange,
    required,
    value,
    dataTestId
  } = props;

  const hasErrorMessage = !!errorMessage;
  const hasDescription = !!description;

  const { descriptionId, describedById, errorId, labelId } = getFormItemIds(
    id,
    hasDescription,
    hasErrorMessage
  );

  return (
    <StyledInputWrapper className={className} data-testid={dataTestId}>
      <StyledToggleLabel id={labelId}>
        <StyledHiddenInput
          aria-describedby={describedById}
          aria-labelledby={labelId}
          aria-invalid={hasErrorMessage}
          aria-required={required}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          type="radio"
          id={id}
          ref={ref}
          required={required}
          value={value}
        />
        <StyledRadio />
        <StyledToggleText disabled={disabled}>
          {label}
          {required && <StyledRequiredLabel />}
        </StyledToggleText>
      </StyledToggleLabel>
      {hasDescription && (
        <StyledDescription id={descriptionId} isToggle>
          {description}
        </StyledDescription>
      )}
      {hasErrorMessage && (
        <StyledErrorMessage id={errorId} role="alert" isToggle>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledInputWrapper>
  );
});

Radio.defaultProps = {
  className: null,
  description: null,
  disabled: false,
  errorMessage: null,
  id: Math.random().toString(36).substr(2, 9),
  label: '',
  required: false,
  dataTestId: null
};

Radio.propTypes = {
  /**
   * Set the checked value of the element.
   */
  checked: PropTypes.bool.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Help text to describe the form field
   */
  description: PropTypes.string,

  /**
   * Set the element to be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Show an error message and set the component styles to visually show an error.
   */
  errorMessage: PropTypes.string,

  /**
   * Set the id of the element.
   * The label uses this id to ensure htmlFor is set correctly.
   */
  id: PropTypes.string,

  /**
   * The label for the component.
   */
  label: PropTypes.string,
  /**
   * Callback onChange.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Set the element to be required.
   * This will show an asterik in the label and add 'required' to the DOM node.
   */
  required: PropTypes.bool,

  /**
   * The value of the element.
   */
  value: PropTypes.string.isRequired,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Radio;
