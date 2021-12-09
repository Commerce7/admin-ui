import PropTypes from 'prop-types';

import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledLabel,
  StyledRequiredLabel,
  StyledDescription
} from '../common/form/styles';
import { getFormItemIds } from '../common/form/helpers';
import {
  StyledSelectWrapper,
  StyledSelect,
  StyledSelectArrow
} from './Select.styles';
import Options from './Options';

const Select = (props) => {
  const {
    autoFocus,
    className,
    description,
    disabled,
    errorMessage,
    id,
    label,
    onChange,
    options,
    placeholder,
    required,
    value,
    dataTestId
  } = props;

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

Select.defaultProps = {
  autoFocus: false,
  className: null,
  description: null,
  disabled: false,
  errorMessage: null,
  id: Math.random().toString(36).substr(2, 9),
  label: null,
  options: [],
  placeholder: null,
  required: false,
  value: '',
  dataTestId: null
};

Select.propTypes = {
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
   * The label for the component.
   */
  label: PropTypes.string,

  /**
   * Callback onChange.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The options for the select field.
   * These will be mapped as `<options/>`.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),

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
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Select;
