import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import DateTime from 'react-datetime';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledLabel,
  StyledRequiredLabel,
  StyledDescription
} from '../common/form/styles';
import Icon from '../icon';
import {
  StyledInput,
  StyledIconWrapper,
  StyledInputIcon
} from '../input/Input.styles';

import { StyledDatePicker, StyledClearButton } from './DatePicker.styles';

const DatePicker = forwardRef((props, ref) => {
  const {
    allowClear,
    autoFocus,
    className,
    description,
    value,
    onChange,
    onFocus,
    onBlur,
    label,
    id,
    isValidDate,
    disabled,
    placeholder,
    required,
    errorMessage,
    dataTestId,
    inline
  } = props;

  const hasErrorMessage = !!errorMessage;
  const hasDescription = !!description;

  const handleClearValue = () => {
    onChange();
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
                {...componentProps} // eslint-disable-line
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

DatePicker.defaultProps = {
  allowClear: false,
  autoFocus: false,
  className: null,
  description: null,
  disabled: false,
  errorMessage: null,
  id: Math.random().toString(36).substr(2, 9),
  inline: false,
  isValidDate: () => true,
  label: null,
  onBlur: () => null,
  onFocus: () => null,
  placeholder: null,
  required: false,
  dataTestId: null
};

DatePicker.propTypes = {
  /**
   * Show a clear value button in the input.
   */
  allowClear: PropTypes.bool,

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
   * Set the id of the element.
   * The label uses this id to ensure htmlFor is set correctly.
   */
  id: PropTypes.string,

  /**
   * Show just the calendar picker without an input.
   */
  inline: PropTypes.bool,

  /**
   * Function to check if a date should be disabled in the datepicker.
   * The function paramaters will include a moment date object.
   */
  isValidDate: PropTypes.func,

  /**
   * The label for the component.
   */
  label: PropTypes.string,

  /**
   * Callback onChange.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Callback onBlur.
   */
  onBlur: PropTypes.func,

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
   * This should be a date with format MMM D, YYYY.
   */
  value: PropTypes.string.isRequired,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default DatePicker;
