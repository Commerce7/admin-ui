import { forwardRef } from 'react';

import { StyledDropdown } from './DropdownMenu.styles';

const DropdownMenu = forwardRef((props, ref) => {
  const { align, children, id, labelledbyId, isVisible } = props;

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

export default DropdownMenu;
