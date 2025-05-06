import React, { ReactNode } from 'react';

import ModalContent from './ModalContent';

export interface ModalProps {
  /**
   * The content of the component.
   * Children should be rendered using ModalBody and ModalFooter
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Disable scrolling on document.body while the modal is open.
   * Setting disableBodyScroll to false should rarely be used.
   */
  disableBodyScroll?: boolean;

  /**
   * Callback fired when the modal is closed.
   */
  onClose?: (() => void) | null;

  /**
   * The title of the modal.
   */
  title?: string;

  /**
   * Set the visibility of the Modal
   */
  visible?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Disable focus lock on modal
   */
  disableFocusLock?: boolean;
}

const Modal = ({
  children = null,
  className = '',
  disableBodyScroll = true,
  onClose = null,
  visible = false,
  title = '',
  dataTestId = '',
  disableFocusLock = false
}: ModalProps) => {
  if (!visible) {
    return null;
  }

  return (
    <ModalContent
      title={title}
      onClose={onClose}
      className={className}
      dataTestId={dataTestId}
      disableBodyScroll={disableBodyScroll}
      disableFocusLock={disableFocusLock}
    >
      {children}
    </ModalContent>
  );
};

export default Modal;
