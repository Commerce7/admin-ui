import Text from '../text';

import {
  StepWrapperStyles,
  StepStyles,
  StepCircleStyles,
  StepLabelWrapper,
  StepDescriptionStyles,
  StepIconStyles
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

  let as = '';
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
    <StepWrapperStyles>
      <StepStyles
        as={as}
        onClick={onClick}
        className={className}
        href={href}
        data-testid={dataTestId}
        $activeClassName={activeClassName}
        {...customComponentProps} // eslint-disable-line
      >
        <StepCircleStyles>
          <StepIconStyles icon={icon} $activeClassName={activeClassName} />
        </StepCircleStyles>
        <StepLabelWrapper>
          <Text small>Step {number}</Text>
          <StepDescriptionStyles block>{description}</StepDescriptionStyles>
        </StepLabelWrapper>
      </StepStyles>
    </StepWrapperStyles>
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
