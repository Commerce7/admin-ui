import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { StyledSelectButton, StyledLoadingIcon } from './SelectButton.styles';

const SelectButton = forwardRef((props, ref) => {
  const {
    isSelected,
    children,
    className,
    disabled,
    loading,
    onClick,
    type,
    dataTestId
  } = props;
  return (
    <StyledSelectButton
      ref={ref}
      className={className}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      isSelected={isSelected}
      data-testid={dataTestId}
    >
      {loading ? <StyledLoadingIcon icon="loading" /> : children}
    </StyledSelectButton>
  );
});

SelectButton.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  onClick: null,
  type: 'button',
  dataTestId: null
};

SelectButton.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set the element to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Set the button to visually show a loading spinner.
   * This will also disable the button.
   * This prop is intended to be used during asynchronous actions, like submitting a form.
   */
  loading: PropTypes.bool,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Adds a type to the button DOM element.
   */
  type: PropTypes.oneOf(['button', 'submit']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default SelectButton;
