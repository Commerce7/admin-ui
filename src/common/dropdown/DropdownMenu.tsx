/* globals document */
import React, { forwardRef, ReactNode, useEffect } from 'react';

import useWindowSize from '../../utils/hooks/useWindowSize';

import { StyledDropdown } from './DropdownMenu.styles';

type AlignType = 'left' | 'right';

interface DropdownMenuProps {
  /**
   * Alignment of the dropdown menu
   */
  align: AlignType;

  /**
   * The content of the dropdown
   */
  children: ReactNode;

  /**
   * Unique identifier for the dropdown
   */
  id: string;

  /**
   * ID of the element that labels this dropdown
   */
  labelledbyId: string;

  /**
   * Controls the visibility of the dropdown
   */
  isVisible: boolean;

  /**
   * Callback when an item is selected
   */
  handleSelectedItem?: () => void;
}

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    { align, children, id, labelledbyId, isVisible, handleSelectedItem },
    ref
  ) => {
    useViewportContainment(id, align, isVisible);

    const handleOnClick = () => {
      handleSelectedItem?.();
    };

    return (
      <StyledDropdown
        ref={ref}
        visible={isVisible}
        align={align}
        id={id}
        aria-labelledby={labelledbyId}
        role="menu"
        onClick={handleOnClick}
      >
        {children}
      </StyledDropdown>
    );
  }
);

const useViewportContainment = (
  id: string,
  align: AlignType,
  isVisible: boolean
) => {
  const { width } = useWindowSize();

  useEffect(() => {
    const node = document.getElementById(id);
    if (node) {
      // Reset back to default values for proper calculation
      if (align === 'left') {
        node.style.left = `0px`;
      }
      if (align === 'right') {
        node.style.right = `0px`;
      }

      const rect = node.getBoundingClientRect();
      const { right, left } = rect;
      const offset = 10;

      if (align === 'left') {
        if (right > width) {
          const diff = right - width + offset;
          node.style.left = `-${diff}px`;
        }
      }
      if (align === 'right') {
        if (left < 0) {
          const diff = Math.abs(left) + offset;
          node.style.right = `-${diff}px`;
        }
      }
    }
  }, [id, width, align, isVisible]);
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
