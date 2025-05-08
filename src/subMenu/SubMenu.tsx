import React, { ReactNode } from 'react';

import { StyledSubMenu } from './SubMenu.styles';

interface SubMenuProps {
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
   * Select whether or not there should be a border below the SubMenu.
   */
  borderBottom?: boolean;

  /**
   * The active className to mark the component as active. Styling targets this classname.
   */
  activeClassName?: string;
}

const SubMenu = ({
  children = null,
  className = '',
  dataTestId = '',
  borderBottom = false,
  activeClassName = 'active'
}: SubMenuProps) => (
  <StyledSubMenu
    className={className}
    data-testid={dataTestId}
    $activeClassName={activeClassName}
    $borderBottom={borderBottom}
  >
    {children}
  </StyledSubMenu>
);

export type { SubMenuProps };
export default SubMenu;
