import React, { ReactNode } from 'react';

import {
  StyledErrorMessage,
  StyledRequiredLabel,
  StyledFieldset,
  StyledHorizontalFieldset,
  StyledFieldsetLabel
} from '../common/form/styles';

type RadioGroupVariant = 'button' | 'default';
type RadioGroupSize = 'small' | 'medium' | 'large';

export interface RadioGroupProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Show an error message and set the component styles to visually show an error
   */
  errorMessage?: string;

  /**
   * The label for the component
   */
  label?: string;

  /**
   * Set the element to be required.
   * This will show an asterik in the label and add 'required' to the DOM node
   */
  required?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * RadioGroup Variant
   */
  variant?: RadioGroupVariant;

  /**
   * RadioGroup Size - only used for button variant.
   */
  size?: RadioGroupSize;
}

const RadioGroup = ({
  children,
  errorMessage = '',
  label = '',
  required = false,
  dataTestId = 'radio-group',
  variant = 'default',
  size = 'small',
  className = ''
}: RadioGroupProps) => {
  const hasErrorMessage = !!errorMessage;
  const isButtonVariant = variant === 'button';

  if (isButtonVariant) {
    return (
      <>
        <StyledHorizontalFieldset
          data-testid={dataTestId}
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

export default RadioGroup;
