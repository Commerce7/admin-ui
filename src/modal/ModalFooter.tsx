import React, { ReactNode } from 'react';

import { StyledModalFooter } from './ModalFooter.styles';

export interface ModalFooterProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;
}

const ModalFooter = ({ children, className = '' }: ModalFooterProps) => (
  <StyledModalFooter className={className}>{children}</StyledModalFooter>
);

export default ModalFooter;
