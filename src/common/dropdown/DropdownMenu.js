/* globals window, document */

import { forwardRef, useEffect } from 'react';

import useWindowSize from '../../utils/hooks/useWindowSize';

import { StyledDropdown } from './DropdownMenu.styles';

const DropdownMenu = forwardRef((props, ref) => {
  const { align, children, id, labelledbyId, isVisible } = props;

  useViewportContainment(id, align);

  return (
    <StyledDropdown
      ref={ref}
      visible={isVisible}
      align={align}
      id={id}
      aria-labelledby={labelledbyId}
      role="menu"
    >
      {children}
    </StyledDropdown>
  );
});

const useViewportContainment = (id, align) => {
  const { width } = useWindowSize();

  useEffect(() => {
    const node = document.getElementById(id);
    if (node) {
      const rect = node.getBoundingClientRect();
      const { right, left } = rect;
      const offset = 10;

      if (align === 'left') {
        if (right > window.innerWidth) {
          const diff = right - window.innerWidth + offset;
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
  }, [id, width, align]);
};

export default DropdownMenu;
