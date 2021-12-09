import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledLabel,
  StyledRequiredLabel,
  StyledDescription
} from '../common/form/styles';
import { getFormItemIds } from '../common/form/helpers';
import {
  StyledInput,
  StyledIconWrapper,
  StyledInputIcon
} from './Input.styles';

const Input = forwardRef((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    className,
    disabled,
    endIcon,
    errorMessage,
    id,
    label,
    description,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    startIcon,
    type,
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
      {label && (
        <StyledLabel htmlFor={id} id={labelId}>
          {label}
          {required && <StyledRequiredLabel />}
        </StyledLabel>
      )}
      <StyledIconWrapper>
        {startIcon && <StyledInputIcon icon={startIcon} iconPosition="start" />}
        <StyledInput
          aria-describedby={describedById}
          aria-labelledby={labelId}
          aria-invalid={hasErrorMessage}
          aria-required={required}
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          id={id}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          hasErrorMessage={hasErrorMessage}
          required={required}
          type={type}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          startIcon={startIcon}
          endIcon={endIcon}
        />
        {endIcon && <StyledInputIcon icon={endIcon} iconPosition="end" />}
      </StyledIconWrapper>
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

Input.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  className: null,
  description: null,
  disabled: false,
  endIcon: null,
  errorMessage: null,
  id: Math.random().toString(36).substr(2, 9),
  label: null,
  onBlur: null,
  onFocus: null,
  placeholder: null,
  type: 'text',
  required: false,
  startIcon: null,
  dataTestId: null
};

Input.propTypes = {
  /**
   * Set the element to autoFocus on mount.
   */
  autoFocus: PropTypes.bool,

  /**
   * Set the element autoComplete focus.
   * This should be avoided except for rare cases.
   */
  autoComplete: PropTypes.string,

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
   * Add an icon to the end of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  endIcon: PropTypes.string,

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
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  startIcon: PropTypes.string,

  /**
   * Set the element html type of the element.
   */
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),

  /**
   * The value of the element.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Input;
