import PropTypes from 'prop-types';

import { NavLinkStyles, NavLinkIconStyles } from './Nav.styles';

const NavLink = (props) => {
  const {
    children = null,
    className = '',
    component = null,
    icon = null,
    onClick = null,
    href = null,
    dataTestId = null,
    activeClassName = 'active',
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
    <NavLinkStyles
      as={as}
      onClick={onClick}
      className={className}
      href={href}
      data-testid={dataTestId}
      $activeClassName={activeClassName}
      {...customComponentProps} // eslint-disable-line
    >
      {icon && <NavLinkIconStyles icon={icon} size={20} />}
      {children}
    </NavLinkStyles>
  );
};

NavLink.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * Icon displayed on the left side of the menu link.
   * Valid icons include all options from the `<Icon/>` component.
   */
  icon: PropTypes.string,

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

export default NavLink;
