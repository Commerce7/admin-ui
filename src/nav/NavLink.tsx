/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, ComponentType, MouseEvent } from 'react';

import { NavLinkStyles, NavLinkIconStyles } from './Nav.styles';

export interface NavLinkProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Icon displayed on the left side of the menu link.
   * Valid icons include all options from the `<Icon/>` component.
   */
  icon?: string;

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

  [key: string]: any;
}

const NavLink = ({
  children = null,
  className = '',
  component = '',
  icon = '',
  onClick = undefined,
  href,
  dataTestId = '',
  activeClassName = 'active',
  ...rest
}: NavLinkProps) => {
  let as: any = '';

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
      {...customComponentProps}
    >
      {icon && <NavLinkIconStyles icon={icon} size={18} />}
      {children}
    </NavLinkStyles>
  );
};

export default NavLink;
