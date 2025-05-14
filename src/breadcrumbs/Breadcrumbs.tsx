import React, { ReactNode } from 'react';

import { BreadcrumbsWrapperStyles } from './Breadcrumbs.styles';

export interface BreadcrumbsProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Breadcrumbs = ({
  className = '',
  dataTestId = '',
  children
}: BreadcrumbsProps) => (
  <BreadcrumbsWrapperStyles className={className} data-testid={dataTestId}>
    {children}
  </BreadcrumbsWrapperStyles>
);

export default Breadcrumbs;
