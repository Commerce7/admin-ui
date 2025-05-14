/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, ComponentType, MouseEvent } from 'react';

import { StyledSubMenuItem } from './SubMenu.styles';

export interface SubMenuItemProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * The active className to mark the component as active. Styling targets this classname.
   */
  activeClassName?: string;

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
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;

  /**
   * The url to link to.
   */
  href?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  [key: string]: any;
}

const SubMenuItem = ({
  children = null,
  activeClassName = 'active',
  className = '',
  component = '',
  onClick = undefined,
  href,
  dataTestId = '',
  ...rest
}: SubMenuItemProps) => {
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
    <StyledSubMenuItem
      as={as}
      onClick={onClick}
      className={className}
      href={href}
      data-testid={dataTestId}
      $activeClassName={activeClassName}
      {...customComponentProps}
    >
      {children}
    </StyledSubMenuItem>
  );
};

export default SubMenuItem;
