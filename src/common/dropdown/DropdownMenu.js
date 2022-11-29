/* globals document */

import { forwardRef, useEffect } from 'react';

import useWindowSize from '../../utils/hooks/useWindowSize';

import { StyledDropdown } from './DropdownMenu.styles';

const DropdownMenu = forwardRef((props, ref) => {
  const { align, children, id, labelledbyId, isVisible, handleSelectedItem } =
    props;

  useViewportContainment(id, align, isVisible);

  const handleOnClick = () => {
    if (handleSelectedItem) {
      handleSelectedItem();
    }
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
});

const useViewportContainment = (id, align, isVisible) => {
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

export default DropdownMenu;
