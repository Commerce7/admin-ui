import PropTypes from 'prop-types';

import {
  StepStyles,
  StepButtonStyles,
  StepCircleStyles,
  StyledStepLabelWrapper,
  StepDescriptionStyles,
  StepIconStyles,
  LineStyles,
  StyledStepText
} from './Stepper.styles';

const Step = (props) => {
  const {
    number,
    description,
    icon,
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
        <StyledStepLabelWrapper>
          <StyledStepText small>Step {number}</StyledStepText>
          <StepDescriptionStyles block>{description}</StepDescriptionStyles>
        </StyledStepLabelWrapper>
      </StepButtonStyles>
      <LineStyles />
    </StepStyles>
  );
};

Step.defaultProps = {
  number: null,
  description: '',
  activeClassName: 'active',
  className: null,
  component: null,
  onClick: null,
  href: null,
  dataTestId: null
};

Step.propTypes = {
  /**
   * The step number.
   */
  number: PropTypes.string,

  /**
   * The step label.
   */
  description: PropTypes.string,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component: PropTypes.any, // eslint-disable-line

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * The url to link to.
   */
  href: PropTypes.string,

  /**
   * The active className to mark the component as active. Styling targets this classname.
   */
  activeClassName: PropTypes.string
};

export default Step;
