import React, { ReactNode } from 'react';

import { SubNavStyles } from './Nav.styles';

export interface SubNavProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Open or close Sub Navigation menu
   */
  isOpen?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const SubNav = (props: SubNavProps) => {
  const {
    children = null,
    isOpen = false,
    className = '',
    dataTestId = null
  } = props;

  return (
    <SubNavStyles
      isOpen={isOpen}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </SubNavStyles>
  );
};

export default SubNav;
