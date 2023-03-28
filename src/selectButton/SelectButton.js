import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Icon from '../icon';

import {
  StyledSelectButton,
  StyledLoadingIcon,
  StyledSmallSelectButton
} from './SelectButton.styles';

const SelectButton = forwardRef((props, ref) => {
  const {
    selected,
    children,
    className,
    disabled,
    loading,
    onClick,
    type,
    dataTestId,
    variant,
    icon,
    as
  } = props;

  if (variant === 'small') {
    return (
      <StyledSmallSelectButton
        ref={ref}
        className={className}
        disabled={disabled || loading}
        type={type}
        onClick={onClick}
        selected={selected}
        data-testid={dataTestId}
        hasIcon={!!icon}
        as={as}
      >
        {loading ? (
          <StyledLoadingIcon icon="loading" />
        ) : (
          <>
            {icon && <Icon icon={icon} />}
            {children}
          </>
        )}
      </StyledSmallSelectButton>
    );
  }

  return (
    <StyledSelectButton
      ref={ref}
      className={className}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      selected={selected}
      data-testid={dataTestId}
      as={as}
    >
      {loading ? <StyledLoadingIcon icon="loading" /> : children}
    </StyledSelectButton>
  );
});

SelectButton.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  selected: false,
  onClick: null,
  type: 'button',
  dataTestId: null,
  variant: 'default',
  icon: null,
  children: null
};

SelectButton.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

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
   * Set the button to visually show that its selected.
   */
  selected: PropTypes.bool,

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
  dataTestId: PropTypes.string,

  /**
   * Select Button Variant.
   */
  variant: PropTypes.oneOf(['small', 'default']),

  /**
   * Icon for display on small variant only.
   */
  icon: PropTypes.string
};

export default SelectButton;
