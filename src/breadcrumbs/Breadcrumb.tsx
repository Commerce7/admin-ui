/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, ElementType } from 'react';

import Text from '../text';

import { BreadcrumbLinkStyles, StyledBreadcrumb } from './Breadcrumb.styles';

export interface BreadcrumbProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (() => void) | null;

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component?: ElementType;

  /**
   * The url to link to.
   */
  href?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Breadcrumb = ({
  className = '',
  component = undefined,
  href = '',
  children,
  dataTestId = '',
  onClick = null,
  ...rest
}: BreadcrumbProps) => {
  let as: ElementType | string = '';
  if (href) {
    as = 'a';
  } else if (!href && onClick) {
    as = 'button';
  }

  let customComponentProps: Record<string, unknown> = {};
  if (as === 'button') {
    customComponentProps.type = 'button';
  }
  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  return (
    <StyledBreadcrumb className={className} data-testid={dataTestId}>
      <BreadcrumbLinkStyles
        as={as}
        onClick={onClick}
        href={href}
        {...customComponentProps}
      >
        <Text>{children}</Text>
      </BreadcrumbLinkStyles>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
