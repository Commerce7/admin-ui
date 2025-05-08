/* eslint-disable react/jsx-props-no-spreading */
import { Moment } from 'moment';
import React, { FocusEvent, forwardRef } from 'react';
import DateTime from 'react-datetime';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledDescription,
  StyledErrorMessage,
  StyledInputWrapper,
  StyledLabel,
  StyledRequiredLabel
} from '../common/form/styles';
import Icon from '../icon';
import {
  StyledIconWrapper,
  StyledInput,
  StyledInputIcon
} from '../input/Input.styles';

import { StyledClearButton, StyledDatePicker } from './DatePicker.styles';

export interface DatePickerProps {
  /**
   * Show a clear value button in the input.
   */
  allowClear?: boolean;

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
   * Set the id of the element.
   * The label uses this id to ensure htmlFor is set correctly.
   */
  id?: string;

  /**
   * Show just the calendar picker without an input.
   */
  inline?: boolean;

  /**
   * Function to check if a date should be disabled in the datepicker.
   * The function parameters will include a moment date object.
   */
  isValidDate?: (currentDate: Moment) => boolean;

  /**
   * The label for the component.
   */
  label?: string;

  /**
   * Callback onChange.
   */
  onChange: (date: Moment | string) => void;

  /**
   * Callback onBlur.
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

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
   * The value of the element.
   * This should be a date with format MMM D, YYYY.
   */
  value: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      allowClear = false,
      autoFocus = false,
      className = '',
      description = null,
      value,
      onChange,
      onFocus = () => null,
      onBlur = () => null,
      label = null,
      id = Math.random().toString(36).substr(2, 9),
      isValidDate = () => true,
      disabled = false,
      placeholder = null,
      required = false,
      errorMessage = null,
      dataTestId = null,
      inline = false
    },
    ref
  ) => {
    const hasErrorMessage = !!errorMessage;
    const hasDescription = !!description;

    const handleClearValue = () => {
      onChange('');
    };

    const { descriptionId, describedById, errorId, labelId } = getFormItemIds(
      id,
      hasDescription,
      hasErrorMessage
    );

    if (inline) {
      return (
        <StyledDatePicker inline className={className}>
          <DateTime
            onChange={onChange}
            onOpen={onFocus}
            onBlur={onBlur}
            autoFocus={autoFocus}
            value={value}
            disabled={disabled}
            timeFormat={false}
            dateFormat="MMM D, YYYY"
            initialViewMode="days"
            isValidDate={isValidDate}
            input={false}
          />
        </StyledDatePicker>
      );
    }

    return (
      <StyledInputWrapper className={className} data-testid={dataTestId}>
        <StyledDatePicker>
          {label && (
            <StyledLabel htmlFor={id}>
              {label}
              {required && <StyledRequiredLabel />}
            </StyledLabel>
          )}
          <DateTime
            onChange={onChange}
            onOpen={onFocus}
            onBlur={onBlur}
            autoFocus={autoFocus}
            value={value}
            disabled={disabled}
            timeFormat={false}
            dateFormat="MMM D, YYYY"
            initialViewMode="days"
            isValidDate={isValidDate}
            inputProps={{
              disabled,
              id,
              placeholder,
              required,
              value
            }}
            closeOnSelect
            renderInput={(componentProps) => (
              <StyledIconWrapper>
                <StyledInputIcon icon="reservation" iconPosition="start" />
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
                  readOnly
                  startIcon="reservation"
                  {...componentProps}
                />
              </StyledIconWrapper>
            )}
          />
          {allowClear && value && (
            <StyledClearButton
              onClick={handleClearValue}
              type="button"
              aria-label="Clear value"
              title="Clear value"
            >
              <Icon icon="close" />
            </StyledClearButton>
          )}
        </StyledDatePicker>
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

DatePicker.displayName = 'DatePicker';

export default DatePicker;
