/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, ComponentType, MouseEvent } from 'react';

import { SubNavLinkStyles } from './Nav.styles';

export interface SubNavLinkProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component?: ComponentType<any> | string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

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

const SubNavLink = (props: SubNavLinkProps) => {
  const {
    children = null,
    className = '',
    component = null,
    onClick = null,
    href = null,
    dataTestId = null,
    activeClassName = 'active',
    ...rest
  } = props;

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
    <SubNavLinkStyles
      as={as}
      onClick={onClick}
      className={className}
      href={href}
      data-testid={dataTestId}
      $activeClassName={activeClassName}
      {...customComponentProps}
    >
      {children}
    </SubNavLinkStyles>
  );
};

export default SubNavLink;
