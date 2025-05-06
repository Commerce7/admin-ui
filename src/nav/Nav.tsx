import React, { ReactNode } from 'react';

import { NavStyles } from './Nav.styles';

interface NavProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Open or close Navigation menu
   */
  isOpen?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Nav = ({
  children = null,
  dataTestId = '',
  className = '',
  isOpen = true
}: NavProps) => (
  <NavStyles className={className} data-testid={dataTestId} isOpen={isOpen}>
    {children}
  </NavStyles>
);

export type { NavProps };
export default Nav;
