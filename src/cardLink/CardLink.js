import PropTypes from 'prop-types';

import {
  StyledCardLink,
  StyledCardIcon,
  StyledCardLabel,
  StyledCardDescription
} from './CardLink.styles';

const CardLink = (props) => {
  const {
    children,
    className = null,
    component = null,
    icon = null,
    href = null,
    label = null,
    // description = null, commented out as not used - to investigate
    dataTestId = null,
    ...rest
  } = props;

  let as = 'a';
  let customComponentProps = {};

  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  return (
    <StyledCardLink
      className={className}
      as={as}
      href={href}
      data-testid={dataTestId}
      {...customComponentProps} // eslint-disable-line
    >
      {icon && <StyledCardIcon icon={icon} />}
      <StyledCardLabel>
        {label}
        <StyledCardDescription>{children}</StyledCardDescription>
      </StyledCardLabel>
    </StyledCardLink>
  );
};

CardLink.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component: PropTypes.any, // eslint-disable-line

  /**
   * The url to link to.
   */
  href: PropTypes.string,

  /**
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  icon: PropTypes.string,

  /**
   * Help text to describe the card
   */
  description: PropTypes.string,

  /**
   * The label for the component.
   */
  label: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default CardLink;
