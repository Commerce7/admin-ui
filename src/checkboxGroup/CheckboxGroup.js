import PropTypes from 'prop-types';

import {
  StyledErrorMessage,
  StyledRequiredLabel,
  StyledFieldset,
  StyledHorizontalFieldset,
  StyledFieldsetLabel
} from '../common/form/styles';

const CheckboxGroup = (props) => {
  const {
    children,
    errorMessage,
    label,
    required,
    dataTestId = 'checkbox-group',
    variant,
    size,
    className
  } = props;

  const hasErrorMessage = !!errorMessage;
  const isButtonVariant = variant === 'button';

  if (isButtonVariant) {
    return (
      <>
        <StyledHorizontalFieldset
          data-testid={dataTestId}
          isButtonVariant={isButtonVariant}
          size={size}
          className={className}
        >
          {label && (
            <StyledFieldsetLabel>
              {label} {required && <StyledRequiredLabel />}
            </StyledFieldsetLabel>
          )}
          {children}
        </StyledHorizontalFieldset>
        {hasErrorMessage && (
          <StyledErrorMessage id={`${dataTestId}-error`}>
            {errorMessage}
          </StyledErrorMessage>
        )}
      </>
    );
  }

  return (
    <StyledFieldset data-testid={dataTestId} className={className}>
      {label && (
        <StyledFieldsetLabel>
          {label} {required && <StyledRequiredLabel />}
        </StyledFieldsetLabel>
      )}
      {children}
      {hasErrorMessage && (
        <StyledErrorMessage id={`${dataTestId}-error`}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledFieldset>
  );
};

CheckboxGroup.defaultProps = {
  errorMessage: null,
  className: '',
  label: null,
  required: false,
  dataTestId: null,
  size: 'small',
  variant: null
};

CheckboxGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Show an error message and set the component styles to visually show an error.
   */
  errorMessage: PropTypes.string,

  /**
   * The label for the component.
   */
  label: PropTypes.string,

  /**
   * Set the element to be required.
   * This will show an asterik in the label and add 'required' to the DOM node.
   */
  required: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * CheckboxGroup Variant
   */
  variant: PropTypes.oneOf(['button', null]),

  /**
   * CheckboxGroup Size - only used for button variant.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default CheckboxGroup;
