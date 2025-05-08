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
}

const ModalBody = ({ children, className = '' }: ModalBodyProps) => (
  <StyledModalBody className={className}>{children}</StyledModalBody>
);

export default ModalBody;
