import React, { useId } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledDescription,
  StyledErrorMessage,
  StyledFieldsetLabel,
  StyledHiddenInput,
  StyledRequiredLabel
} from '../common/form/styles';

import {
  StyledColorSelect,
  StyledSwatch,
  StyledSwatchIcon,
  StyledSwatchLabel,
  StyledSwatchList
} from './ColorSelect.styles';

export interface ColorSelectOption {
  /**
   * The value returned in onChange when this swatch is selected.
   */
  value: string;

  /**
   * Any valid CSS color used to fill the swatch.
   */
  color: string;

  /**
   * Accessible name for the swatch. Defaults to the value.
   */
  label?: string;
}

export interface ColorSelectProps {
  /**
   * The preset swatches to choose from.
   */
  options: ColorSelectOption[];

  /**
   * The selected option value, or null when nothing is selected.
   */
  value: string | null;

  /**
   * Callback fired with the newly selected value, or null when the selection is removed.
   */
  onChange: (value: string | null) => void;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Help text to describe the form field.
   */
  description?: string;

  /**
   * Set the element to be disabled.
   */
  disabled?: boolean;

  /**
   * Show an error message.
   */
  errorMessage?: string;

  /**
   * Set the id of the element. Also used as the base for the radio group name.
   */
  id?: string;

  /**
   * The label for the component.
   */
  label?: string;

  /**
   * Set the element to be required.
   * This shows an asterisk in the label and prevents the user from removing their selection
   * by clicking the selected swatch again (standard radio behaviour).
   */
  required?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const ColorSelect = ({
  options,
  value,
  onChange,
  className = '',
  description,
  disabled = false,
  errorMessage,
  id,
  label = '',
  required = false,
  dataTestId
}: ColorSelectProps) => {
  const generatedId = useId();
  const baseId = id || generatedId;
  const hasErrorMessage = !!errorMessage;
  const hasDescription = !!description;

  const { descriptionId, describedById, errorId } = getFormItemIds(
    baseId,
    hasDescription,
    hasErrorMessage
  );

  return (
    <StyledColorSelect
      className={className}
      data-testid={dataTestId}
      disabled={disabled}
      aria-describedby={describedById || undefined}
      aria-invalid={hasErrorMessage}
    >
      {label && (
        <StyledFieldsetLabel>
          {label}
          {required && <StyledRequiredLabel />}
        </StyledFieldsetLabel>
      )}
      <StyledSwatchList>
        {options.map((option) => {
          const optionId = `${baseId}-${option.value}`;
          const isSelected = value === option.value;

          return (
            <StyledSwatchLabel
              key={option.value}
              htmlFor={optionId}
              title={option.label || option.value}
            >
              <StyledHiddenInput
                type="radio"
                id={optionId}
                name={baseId}
                value={option.value}
                checked={isSelected}
                disabled={disabled}
                required={required}
                aria-label={option.label || option.value}
                onChange={() => onChange(option.value)}
                // Clicking an already-checked radio doesn't fire onChange, so
                // handle deselection here when a selection is optional.
                onClick={() => {
                  if (isSelected && !required) {
                    onChange(null);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === ' ' && isSelected && !required) {
                    event.preventDefault();
                    onChange(null);
                  }
                }}
              />
              <StyledSwatch swatchColor={option.color}>
                <StyledSwatchIcon icon="check" />
              </StyledSwatch>
            </StyledSwatchLabel>
          );
        })}
      </StyledSwatchList>
      {hasDescription && (
        <StyledDescription id={descriptionId}>{description}</StyledDescription>
      )}
      {hasErrorMessage && (
        <StyledErrorMessage id={errorId} role="alert">
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledColorSelect>
  );
};

export default ColorSelect;
