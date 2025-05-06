import React, { ReactNode, MouseEvent } from 'react';

import {
  StyledContextMenuItem,
  StyledContextMenuIcon,
  StyledContextMenuImage
} from './ContextMenuItem.styles';

export interface ContextMenuItemProps {
  /**
   * Add an alt to the image inside the element.
   * This should only be used if the img prop is set.
   */
  alt?: string;

  /**
   * The contents of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set the element to disabled.
   */
  disabled?: boolean;

  /**
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  icon?: string;

  /**
   * Add an image to the start of the element.
   */
  img?: string;

  /**
   * Callback fired when the component is clicked.
   */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const ContextMenuItem = ({
  onClick,
  children,
  className = '',
  icon = '',
  img = '',
  alt = '',
  disabled = false,
  dataTestId = ''
}: ContextMenuItemProps) => (
  <StyledContextMenuItem
    className={className}
    onClick={onClick}
    disabled={disabled}
    type="button"
    data-testid={dataTestId}
  >
    {icon && <StyledContextMenuIcon icon={icon} />}
    {img && <StyledContextMenuImage src={img} alt={alt} />}
    {children}
  </StyledContextMenuItem>
);

export default ContextMenuItem;
