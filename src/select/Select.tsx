import React, { ChangeEvent } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledLabel,
  StyledRequiredLabel,
  StyledDescription
} from '../common/form/styles';

import Options, { OptionItem } from './Options';
import {
  StyledSelectWrapper,
  StyledSelect,
  StyledSelectArrow
} from './Select.styles';

export interface SelectProps {
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
   * The label for the component.
   */
  label?: string;

  /**
   * Callback onChange.
   */
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;

  /**
   * The options for the select field.
   * These will be mapped as `<options/>`.
   */
  options?: OptionItem[];

  /**
   * The placeholder of the element.
   */
  placeholder?: string;

  /**
   * Set the element to be required.
   * This will show an asterik in the label and add 'required' to the DOM node.
   */
  required?: boolean;

  /**
   * The value of the element.
   */
  value: string | number;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Select = ({
  autoFocus = false,
  className = '',
  description = '',
  disabled = false,
  errorMessage = '',
  id = Math.random().toString(36).substr(2, 9),
  label = '',
  onChange,
  options = [],
  placeholder = '',
  required = false,
  value = '',
  dataTestId = ''
}: SelectProps) => {
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
      <StyledSelectWrapper>
        <StyledSelect
          aria-describedby={describedById}
          aria-labelledby={labelId}
          aria-invalid={hasErrorMessage}
          aria-required={required}
          autoFocus={autoFocus}
          disabled={disabled}
          value={value}
          id={id}
          onChange={onChange}
          hasErrorMessage={hasErrorMessage}
          required={required}
        >
          <Options options={options} placeholder={placeholder} />
        </StyledSelect>
        <StyledSelectArrow icon="chevronDown" />
      </StyledSelectWrapper>
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
};

export default Select;
