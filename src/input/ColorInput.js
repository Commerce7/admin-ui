import styled from 'styled-components';

import { StyledFormItem } from '../common/form/styles';

const ColorInput = ({
  value,
  onBlur,
  onChange,
  disabled,
  id,
  onFocus,
  required,
  autoFocus,
  ref,
  hasErrorMessage,
  ariaDescribedBy,
  ariaLabelledBy,
  ariaInvalid,
  ariaRequired
}) => {
  const handleColorChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e) => {
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

const StyledColorInput = styled.div`
  position: relative;

  input[type='color'] {
    position: absolute;
    margin: 0;
    padding: 0;
    border: none; /* Optional: Removes the border */
    -webkit-appearance: none; /* For WebKit/Blink browsers */
    appearance: none; /* For modern browsers */
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

const StyledInput = styled(StyledFormItem).attrs({
  as: 'input'
})`
  cursor: text;
  padding-left: 45px;
  width: 100%;
  min-width: 130px;
  text-transform: uppercase;
`;

const StyledColorBox = styled.input`
  top: 5px;
  left: 5px;
  height: 36px;
  width: 36px;
  position: absolute;
  background-color: ${({ theme }) => theme.c7__ui.backgroundColor};
`;

export default ColorInput;
