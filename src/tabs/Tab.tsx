/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, MouseEvent, ReactNode } from 'react';

import { TabStyles } from './Tabs.styles';

export interface TabProps {
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
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component?: ComponentType<any> | string;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  /**
   * The url to link to.
   */
  href?: string;

  /**
   * The active className to mark the component as active. Styling targets this classname.
   */
  activeClassName?: string;

  /**
   * Additional props to be spread to the underlying element
   */
  [key: string]: any;
}

const Tab = ({
  children = null,
  activeClassName = 'active',
  className = '',
  component,
  onClick,
  href = '',
  dataTestId = '',
  ...rest
}: TabProps) => {
  let as: any = '';
  if (href) {
    as = 'a';
  } else if (!href && onClick) {
    as = 'button';
  }

  let customComponentProps: Record<string, any> = {};
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
    <TabStyles
      as={as}
      onClick={onClick}
      className={className}
      href={href}
      data-testid={dataTestId}
      $activeClassName={activeClassName}
      {...customComponentProps}
    >
      {children}
    </TabStyles>
  );
};

export default Tab;
