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
   * Set the overflow behavior. Defaults to 'auto'.
   */
  overflow?: 'visible' | 'auto' | 'hidden' | 'scroll';
}

const ModalBody = ({
  children,
  className = '',
  overflow = 'auto'
}: ModalBodyProps) => (
  <StyledModalBody className={className} overflow={overflow}>
    {children}
  </StyledModalBody>
);

export default ModalBody;
