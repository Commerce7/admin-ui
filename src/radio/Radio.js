import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { getFormItemIds } from '../common/form/helpers';
import {
  StyledInputWrapper,
  StyledToggleLabel,
  StyledToggleText,
  StyledRequiredLabel,
  StyledHiddenInput,
  StyledDescription,
  StyledErrorMessage
} from '../common/form/styles';
import SelectButton from '../selectButton';

import { StyledRadio } from './Radio.styles';

const Radio = forwardRef((props, ref) => {
  const {
    checked,
    className,
    description,
    disabled,
    errorMessage,
    id,
    label,
    onChange,
    onClick,
    required,
    value,
    dataTestId,
    variant,
    size,
    icon,
    children
  } = props;

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
          type="radio"
          id={id}
          ref={ref}
          required={required}
          value={value}
        />
        {isButtonVariant ? (
          <SelectButton
            selected={checked}
            size={size}
            icon={icon}
            disabled={disabled}
            onClick={onClick}
            as="span"
          >
            {children}
          </SelectButton>
        ) : (
          <StyledRadio />
        )}
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
});

Radio.defaultProps = {
  className: null,
  description: null,
  disabled: false,
  errorMessage: null,
  id: Math.random().toString(36).substr(2, 9),
  label: '',
  required: false,
  dataTestId: null,
  variant: 'default',
  size: null,
  icon: null,
  onClick: null
};

Radio.propTypes = {
  /**
   * Set the checked value of the element.
   */
  checked: PropTypes.bool.isRequired,

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
   * The label for the component.
   */
  label: PropTypes.string,

  /**
   * Callback onChange.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Callback onClick, only used for button variant.
   */
  onClick: PropTypes.func,

  /**
   * Set the element to be required.
   * This will show an asterik in the label and add 'required' to the DOM node.
   */
  required: PropTypes.bool,

  /**
   * The value of the element.
   */
  value: PropTypes.string.isRequired,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * Radio Variant.
   */
  variant: PropTypes.oneOf(['button', 'default']),

  /**
   * Radio Size - only used for button variant.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Icon for button variant only.
   */
  icon: PropTypes.string
};

export default Radio;
