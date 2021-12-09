import { forwardRef } from 'react';

import { StyledDropdownWrapper } from './DropdownWrapper.styles';

const DropdownWrapper = forwardRef((props, ref) => {
  const { children, className, dataTestId } = props;

  return (
    <StyledDropdownWrapper
      className={className}
      ref={ref}
      data-testid={dataTestId}
    >
      {children}
    </StyledDropdownWrapper>
  );
});

export default DropdownWrapper;
