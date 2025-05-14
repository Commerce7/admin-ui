import React, { ChangeEvent, FocusEvent, forwardRef } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledDescription,
  StyledErrorMessage,
  StyledInputWrapper,
  StyledLabel,
  StyledRequiredLabel
} from '../common/form/styles';

import { StyledTextarea } from './Textarea.styles';

export interface TextareaProps {
  /**
   * Set the element to autoFocus on mount.
   */
  autoFocus?: boolean;

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
   * Show an error message and set the component styles to visually show an error.
   */
  errorMessage?: string;

  /**
   * Set the height of the element.
   */
  height?: number;

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
   * Callback onBlur.
   */
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;

  /**
   * Callback onChange.
   */
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * Callback onFocus.
   */
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;

  /**
   * The placeholder of the element.
   */
  placeholder?: string;

  /**
   * Set the element to be required.
   * This will show an asterisk in the label and add 'required' to the DOM node.
   */
  required?: boolean;

  /**
   * The value of the element.
   */
  value: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      autoFocus = false,
      className = '',
      description = null,
      disabled = false,
      errorMessage = null,
      height = 250,
      id = Math.random().toString(36).substr(2, 9),
      label = null,
      onBlur,
      onChange,
      onFocus,
      placeholder = '',
      required = false,
      value,
      dataTestId = null
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

    return (
      <StyledInputWrapper className={className} data-testid={dataTestId}>
        {label && (
          <StyledLabel htmlFor={id} id={labelId}>
            {label}
            {required && <StyledRequiredLabel />}
          </StyledLabel>
        )}
        <StyledTextarea
          as="textarea"
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

Textarea.displayName = 'Textarea';

export default Textarea;
