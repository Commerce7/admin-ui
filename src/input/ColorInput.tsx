import React, { ChangeEvent, FocusEvent, RefObject } from 'react';
import styled from 'styled-components';

import { StyledFormItem } from '../common/form/styles';

interface ColorInputProps {
  /**
   * The value of the color input
   */
  value: string;

  /**
   * Callback when input loses focus
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Callback when input value changes
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Whether the input is disabled
   */
  disabled?: boolean;

  /**
   * The id of the input
   */
  id?: string;

  /**
   * Callback when input gains focus
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Whether the input is required
   */
  required?: boolean;

  /**
   * Whether the input should auto focus
   */
  autoFocus?: boolean;

  /**
   * Ref to the input element
   */
  ref?: RefObject<HTMLInputElement>;

  /**
   * Whether the input has an error
   */
  hasErrorMessage?: boolean;

  /**
   * ID of element describing the input
   */
  ariaDescribedBy?: string;

  /**
   * ID of element labeling the input
   */
  ariaLabelledBy?: string;

  /**
   * Whether the input is invalid
   */
  ariaInvalid?: boolean;

  /**
   * Whether the input is required for accessibility
   */
  ariaRequired?: boolean;
}

const ColorInput = ({
  value,
  onBlur,
  onChange,
  disabled = false,
  id,
  onFocus,
  required = false,
  autoFocus = false,
  ref,
  hasErrorMessage = false,
  ariaDescribedBy,
  ariaLabelledBy,
  ariaInvalid = false,
  ariaRequired = false
}: ColorInputProps) => {
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <StyledColorInput>
      <StyledColorBox
        disabled={disabled}
        onBlur={handleBlur}
        onChange={handleColorChange}
        value={value}
        id={id}
        type="color"
      />
      <StyledInput
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={ariaInvalid}
        aria-required={ariaRequired}
        type="text"
        value={value}
        id={id}
        onChange={handleColorChange}
        onBlur={handleBlur}
        disabled={disabled}
        onFocus={onFocus}
        required={required}
        autoFocus={autoFocus}
        ref={ref}
        hasErrorMessage={hasErrorMessage}
      />
    </StyledColorInput>
  );
};

interface StyledColorInputProps {
  theme: {
    c7__ui: {
      borderColor: string;
      backgroundColor: string;
    };
  };
}

const StyledColorInput = styled.div<StyledColorInputProps>`
  position: relative;

  input[type='color'] {
    position: absolute;
    margin: 0;
    padding: 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  input[type='color']::-webkit-color-swatch {
    border: 1px solid;
    border-color: ${({ theme }) => theme.c7__ui.borderColor};
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;
  }
`;

interface StyledInputProps {
  hasErrorMessage?: boolean;
}

const StyledInput = styled(StyledFormItem).attrs({
  as: 'input'
})<StyledInputProps>`
  cursor: text;
  padding-left: 45px;
  width: 100%;
  min-width: 130px;
  text-transform: uppercase;
`;

interface StyledColorBoxProps {
  theme: {
    c7__ui: {
      backgroundColor: string;
    };
  };
}

const StyledColorBox = styled.input<StyledColorBoxProps>`
  top: 5px;
  left: 5px;
  height: 36px;
  width: 36px;
  position: absolute;
  background-color: ${({ theme }) => theme.c7__ui.backgroundColor};
`;

export type { ColorInputProps };
export default ColorInput;
