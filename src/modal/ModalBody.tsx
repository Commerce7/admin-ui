import React, { ReactNode } from 'react';

import { StyledModalBody } from './ModalBody.styles';

export interface ModalBodyProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set the overflow behavior. Defaults to 'visible'.
   */
  overflow?: 'visible' | 'auto' | 'hidden' | 'scroll';
}

const ModalBody = ({
  children,
  className = '',
  overflow = 'visible'
}: ModalBodyProps) => (
  <StyledModalBody className={className} overflow={overflow}>
    {children}
  </StyledModalBody>
);

export default ModalBody;
