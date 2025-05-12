import React, { ChangeEvent, FocusEvent, forwardRef } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledLabel,
  StyledRequiredLabel,
  StyledDescription
} from '../common/form/styles';

import {
  StyledInput,
  StyledIconWrapper,
  StyledInputIcon,
  StyledInputSuffix
} from './Input.styles';

type InputMode =
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';
type InputType = 'text' | 'number' | 'password' | 'email' | 'color';

export interface InputProps {
  /**
   * Set the element to autoFocus on mount.
   */
  autoFocus?: boolean;

  /**
   * Set the element autoComplete focus.
   * This should be avoided except for rare cases.
   */
  autoComplete?: string;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Help text to describe the form field
   */
  description?: string;

  /**
   * Set the element to be disabled.
   */
  disabled?: boolean;

  /**
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  startIcon?: string;

  /**
   * Add an icon to the end of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  endIcon?: string;

  /**
   * Adds a suffix in secondary font styling to end of input.
   * Cannot be used with endIcon.
   */
  suffix?: string;

  /**
   * Show an error message and set the component styles to visually show an error.
   */
  errorMessage?: string;

  /**
   * Set the id of the element.
   * The label uses this id to ensure htmlFor is set correctly.
   */
  id?: string;

  /**
   * The label for the component.
   */
  label?: string;

  /**
   * Set the inputmode of the element.
   * This allows a browser to display an appropriate virtual keyboard.
   */
  inputMode?: InputMode;

  /**
   * Callback onBlur.
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Callback onChange.
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback onFocus.
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * The placeholder of the element.
   */
  placeholder?: string;

  /**
   * Set the element to be required.
   */
  required?: boolean;

  /**
   * Set the element html type of the element.
   */
  type?: InputType;

  /**
   * The value of the element.
   */
  value: string | number;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete,
      autoFocus = false,
      className = '',
      description,
      disabled = false,
      endIcon,
      errorMessage,
      id = Math.random().toString(36).substr(2, 9),
      label,
      inputMode,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      startIcon,
      suffix,
      type = 'text',
      value,
      dataTestId
    },
    ref
  ) => {
    const hasErrorMessage = !!errorMessage;
    const hasDescription = !!description;

    const { descriptionId, describedById, errorId, labelId } = getFormItemIds(
      id,
      hasDescription,
      hasErrorMessage
    );

    if (type === 'color') {
      return (
        <StyledInputWrapper className={className} data-testid={dataTestId}>
          {label && (
            <StyledLabel htmlFor={id}>
              {label}
              {required && <StyledRequiredLabel />}
            </StyledLabel>
          )}
          <StyledInput
            aria-describedby={describedById}
            aria-labelledby={labelId}
            aria-invalid={hasErrorMessage}
            aria-required={required}
            ref={ref}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            disabled={disabled}
            id={id}
            inputMode={inputMode}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            required={required}
            type={type}
            value={value}
            hasErrorMessage={hasErrorMessage}
          />
          {hasDescription && (
            <StyledDescription id={descriptionId}>
              {description}
            </StyledDescription>
          )}
          {hasErrorMessage && (
            <StyledErrorMessage id={errorId} role="alert">
              {errorMessage}
            </StyledErrorMessage>
          )}
        </StyledInputWrapper>
      );
    }

    return (
      <StyledInputWrapper className={className} data-testid={dataTestId}>
        {label && (
          <StyledLabel htmlFor={id}>
            {label}
            {required && <StyledRequiredLabel />}
          </StyledLabel>
        )}
        <StyledIconWrapper>
          {startIcon && (
            <StyledInputIcon icon={startIcon} iconPosition="start" />
          )}
          <StyledInput
            aria-describedby={describedById}
            aria-labelledby={labelId}
            aria-invalid={hasErrorMessage}
            aria-required={required}
            ref={ref}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            disabled={disabled}
            id={id}
            inputMode={inputMode}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            required={required}
            type={type}
            value={value}
            hasErrorMessage={hasErrorMessage}
            startIcon={startIcon}
            endIcon={endIcon}
          />
          {endIcon && <StyledInputIcon icon={endIcon} iconPosition="end" />}
          {suffix && !endIcon && (
            <StyledInputSuffix>{suffix}</StyledInputSuffix>
          )}
        </StyledIconWrapper>
        {hasDescription && (
          <StyledDescription id={descriptionId}>
            {description}
          </StyledDescription>
        )}
        {hasErrorMessage && (
          <StyledErrorMessage id={errorId} role="alert">
            {errorMessage}
          </StyledErrorMessage>
        )}
      </StyledInputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
