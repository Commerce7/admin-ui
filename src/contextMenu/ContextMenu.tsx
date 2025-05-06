import React, { ReactNode } from 'react';

import { StyledContextMenu } from './ContextMenu.styles';

interface ContextMenuProps {
  /**
   * The contents of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const ContextMenu = ({
  children,
  className = '',
  dataTestId = ''
}: ContextMenuProps) => (
  <StyledContextMenu className={className} data-testid={dataTestId}>
    {children}
  </StyledContextMenu>
);

export default ContextMenu;
