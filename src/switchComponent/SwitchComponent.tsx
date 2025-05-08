import React, { forwardRef, ChangeEvent } from 'react';

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

import { StyledSwitchIcon } from './Switch.styles';

export interface SwitchProps {
  /**
   * Set the checked value of the element.
   */
  checked: boolean;

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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Set the element to be required.
   * This will show an asterisk in the label and add 'required' to the DOM node.
   */
  required?: boolean;

  /**
   * The value of the element.
   */
  value?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const SwitchComponent = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked,
      className = '',
      description = '',
      errorMessage = '',
      disabled = false,
      label = '',
      onChange,
      required = false,
      value = '',
      id = Math.random().toString(36).substr(2, 9),
      dataTestId = ''
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
        <StyledToggleLabel id={labelId}>
          <StyledHiddenInput
            aria-describedby={describedById}
            aria-labelledby={labelId}
            aria-invalid={hasErrorMessage}
            aria-required={required}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            type="checkbox"
            id={id}
            ref={ref}
            required={required}
            value={value}
          />
          <StyledSwitchIcon />
          <StyledToggleText disabled={disabled}>
            {label}
            {required && <StyledRequiredLabel />}
          </StyledToggleText>
        </StyledToggleLabel>
        {hasDescription && (
          <StyledDescription id={descriptionId} isSwitch>
            {description}
          </StyledDescription>
        )}
        {hasErrorMessage && (
          <StyledErrorMessage id={errorId} role="alert" isSwitch>
            {errorMessage}
          </StyledErrorMessage>
        )}
      </StyledInputWrapper>
    );
  }
);

SwitchComponent.displayName = 'SwitchComponent';

export default SwitchComponent;
