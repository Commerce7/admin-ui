import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledLabel,
  StyledRequiredLabel,
  StyledDescription
} from '../common/form/styles';

import { StyledTextarea } from './Textarea.styles';

const Textarea = forwardRef((props, ref) => {
  const {
    autoFocus = false,
    className = null,
    description = null,
    disabled = false,
    errorMessage = null,
    height = 250,
    id = Math.random().toString(36).substr(2, 9),
    label = null,
    onBlur = null,
    onChange,
    onFocus = null,
    placeholder = null,
    required = false,
    value,
    dataTestId = null
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
      {label && (
        <StyledLabel htmlFor={id} id={labelId}>
          {label}
          {required && <StyledRequiredLabel />}
        </StyledLabel>
      )}
      <StyledTextarea
        aria-describedby={describedById}
        aria-labelledby={labelId}
        aria-invalid={hasErrorMessage}
        aria-required={required}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        id={id}
        value={value}
        height={height}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        hasErrorMessage={hasErrorMessage}
        required={required}
        autoFocus={autoFocus}
      />
      {hasDescription && (
        <StyledDescription id={descriptionId}>{description}</StyledDescription>
      )}
      {hasErrorMessage && (
        <StyledErrorMessage id={errorId} role="alert">
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledInputWrapper>
  );
});

Textarea.propTypes = {
  /**
   * Set the element to autoFocus on mount.
   */
  autoFocus: PropTypes.bool,

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
   * Set the height of the element.
   */
  height: PropTypes.number,

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
   * Callback onBlur.
   */
  onBlur: PropTypes.func,

  /**
   * Callback onChange.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Callback onFocus.
   */
  onFocus: PropTypes.func,

  /**
   * The placeholder of the element.
   */
  placeholder: PropTypes.string,

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

export default Textarea;
