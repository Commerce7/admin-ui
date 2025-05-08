import React, { ReactNode } from 'react';

import {
  StyledErrorMessage,
  StyledRequiredLabel,
  StyledFieldset,
  StyledHorizontalFieldset,
  StyledFieldsetLabel
} from '../common/form/styles';

type CheckboxGroupVariant = 'button' | null;
type CheckboxGroupSize = 'small' | 'medium' | 'large';

interface CheckboxGroupProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Show an error message and set the component styles to visually show an error.
   */
  errorMessage?: string;

  /**
   * The label for the component.
   */
  label?: string;

  /**
   * Set the element to be required.
   * This will show an asterisk in the label and add 'required' to the DOM node.
   */
  required?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * CheckboxGroup Variant
   */
  variant?: CheckboxGroupVariant;

  /**
   * CheckboxGroup Size - only used for button variant.
   */
  size?: CheckboxGroupSize;
}

const CheckboxGroup = ({
  children,
  errorMessage = '',
  label = '',
  required = false,
  dataTestId = 'checkbox-group',
  variant = null,
  size = 'small',
  className = ''
}: CheckboxGroupProps) => {
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

export default CheckboxGroup;
