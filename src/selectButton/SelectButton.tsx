import React, { forwardRef, MouseEvent, ReactNode } from 'react';

import Icon from '../icon';

import {
  StyledLoadingIcon,
  StyledMediumSelectButton,
  StyledSelectButton,
  StyledSmallSelectButton
} from './SelectButton.styles';

type ButtonType = 'button' | 'submit';
type ButtonSize = 'small' | 'medium' | 'large';

export interface SelectButtonProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set the element to disabled.
   */
  disabled?: boolean;

  /**
   * Set the button to visually show a loading spinner.
   * This will also disable the button.
   * This prop is intended to be used during asynchronous actions, like submitting a form.
   */
  loading?: boolean;

  /**
   * Set the button to visually show that its selected.
   */
  selected?: boolean;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Adds a type to the button DOM element.
   */
  type?: ButtonType;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Select Button Variant.
   */
  size?: ButtonSize;

  /**
   * Icon for display on small variant only.
   */
  icon?: string;

  /**
   * Component to render as
   */
  as?: any;
}

const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  (
    {
      selected = false,
      children = null,
      className = '',
      disabled = false,
      loading = false,
      onClick = null,
      type = 'button',
      dataTestId = null,
      size = 'large',
      icon = null,
      as
    },
    ref
  ) => {
    if (size === 'small') {
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

    if (size === 'medium') {
      return (
        <StyledMediumSelectButton
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
        </StyledMediumSelectButton>
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
  }
);

SelectButton.displayName = 'SelectButton';

export default SelectButton;
