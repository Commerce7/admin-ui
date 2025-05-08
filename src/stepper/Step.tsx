/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, MouseEvent } from 'react';

import {
  StyledLine,
  StyledStep,
  StyledStepButton,
  StyledStepCircle,
  StyledStepDescription,
  StyledStepIcon,
  StyledStepLabelWrapper,
  StyledStepText
} from './Stepper.styles';

export interface StepProps {
  /**
   * The step number.
   */
  step?: number;

  /**
   * The step label.
   */
  description?: string;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component?: ComponentType<any> | string;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;

  /**
   * The url to link to.
   */
  href?: string;

  /**
   * The active className to mark the component as active. Styling targets this classname.
   */
  activeClassName?: string;

  /**
   * Icon for the step
   */
  icon?: string;

  [key: string]: any;
}

const Step = (props: StepProps) => {
  const {
    step = null,
    description = '',
    icon,
    activeClassName = 'active',
    className = null,
    component = null,
    onClick = null,
    href = null,
    dataTestId = null,
    ...rest
  } = props;

  let as: any = 'div';
  if (href) {
    as = 'a';
  } else if (!href && onClick) {
    as = 'button';
  }

  let customComponentProps = {};
  if (as === 'button') {
    customComponentProps = { type: 'button', ...rest };
  }
  if (as === 'a') {
    customComponentProps = { ...rest };
  }
  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  return (
    <StyledStep>
      <StyledStepButton
        as={as}
        onClick={onClick}
        href={href}
        $activeClassName={activeClassName}
        className={className}
        data-testid={dataTestId}
        {...customComponentProps}
      >
        <StyledStepCircle>
          <StyledStepIcon icon={icon} />
        </StyledStepCircle>
        <StyledStepLabelWrapper>
          <StyledStepText small>Step {step}</StyledStepText>
          <StyledStepDescription block>{description}</StyledStepDescription>
        </StyledStepLabelWrapper>
      </StyledStepButton>
      <StyledLine />
    </StyledStep>
  );
};

export type { StepProps };
export default Step;
