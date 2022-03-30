import Text from '../text';

import {
  StepStyles,
  StepButtonStyles,
  StepCircleStyles,
  StepLabelWrapper,
  StepDescriptionStyles,
  StepIconStyles,
  LineStyles
} from './Stepper.styles';

const Step = (props) => {
  const {
    number,
    description,
    icon,
    children,
    activeClassName,
    className,
    component,
    onClick,
    href,
    dataTestId,
    ...rest
  } = props;

  let as = 'div';
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
    <StepStyles>
      <StepButtonStyles
        as={as}
        onClick={onClick}
        href={href}
        $activeClassName={activeClassName}
        className={className}
        data-testid={dataTestId}
        {...customComponentProps} // eslint-disable-line
      >
        <StepCircleStyles>
          <StepIconStyles icon={icon} />
        </StepCircleStyles>
        <StepLabelWrapper>
          <Text small>Step {number}</Text>
          <StepDescriptionStyles block>{description}</StepDescriptionStyles>
        </StepLabelWrapper>
      </StepButtonStyles>
      <LineStyles />
    </StepStyles>
  );
};

Step.defaultProps = {
  children: null,
  activeClassName: 'active',
  className: null,
  component: null,
  onClick: null,
  href: null,
  dataTestId: null
};

export default Step;
