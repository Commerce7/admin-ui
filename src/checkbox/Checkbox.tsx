import React, { ChangeEvent, forwardRef, ReactNode } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledDescription,
  StyledErrorMessage,
  StyledHiddenInput,
  StyledInputWrapper,
  StyledRequiredLabel,
  StyledToggleLabel,
  StyledToggleText
} from '../common/form/styles';
import SelectButton from '../selectButton';

import { StyledCheckbox, StyledCheckboxIcon } from './Checkbox.styles';

type CheckboxVariant = 'button' | 'default';
type CheckboxSize = 'small' | 'medium' | 'large';

export interface CheckboxProps {
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

  /**
   * Radio Variant.
   */
  variant?: CheckboxVariant;

  /**
   * Checkbox Size - only used for button variant.
   */
  size?: CheckboxSize;

  /**
   * Icon for button variant only.
   */
  icon?: string;

  /**
   * Children for button variant only.
   */
  children?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      className = '',
      description = null,
      disabled = false,
      errorMessage = null,
      id = Math.random().toString(36).substr(2, 9),
      label = '',
      onChange,
      required = false,
      value = '',
      dataTestId = null,
      variant = 'default',
      size = 'medium',
      icon,
      children
    },
    ref
  ) => {
    const hasErrorMessage = !!errorMessage;
    const hasDescription = !!description;
    const isButtonVariant = variant === 'button';

    const { descriptionId, describedById, errorId, labelId } = getFormItemIds(
      id,
      hasDescription,
      hasErrorMessage
    );

    return (
      <StyledInputWrapper
        className={className}
        data-testid={dataTestId}
        isButtonVariant={isButtonVariant}
      >
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
          <>
            {isButtonVariant ? (
              <SelectButton
                selected={checked}
                size={size}
                icon={icon}
                disabled={disabled}
                as="span"
              >
                {children}
              </SelectButton>
            ) : (
              <StyledCheckbox hasError={hasErrorMessage}>
                <StyledCheckboxIcon icon="check" />
              </StyledCheckbox>
            )}
          </>
          <StyledToggleText disabled={disabled}>
            {label}
            {required && <StyledRequiredLabel />}
          </StyledToggleText>
        </StyledToggleLabel>
        {hasDescription && (
          <StyledDescription
            id={descriptionId}
            isToggle={!isButtonVariant}
            isButton={isButtonVariant}
            buttonSize={size}
          >
            {description}
          </StyledDescription>
        )}
        {hasErrorMessage && (
          <StyledErrorMessage
            id={errorId}
            role="alert"
            isToggle={!isButtonVariant}
            isButton={isButtonVariant}
            buttonSize={size}
          >
            {errorMessage}
          </StyledErrorMessage>
        )}
      </StyledInputWrapper>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
