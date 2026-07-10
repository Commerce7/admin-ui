import React, { ReactNode, useEffect, useState } from 'react';

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

  /**
   * Enable or disable the open/close animation.
   */
  animate?: boolean;

  /**
   * Duration of the open/close animation in milliseconds.
   */
  animationDuration?: number;
}

const Modal = ({
  children = null,
  className = '',
  disableBodyScroll = true,
  onClose = null,
  visible = false,
  title = '',
  dataTestId = '',
  disableFocusLock = false,
  animate = true,
  animationDuration = 300
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      setIsClosing(false);
    } else if (isVisible) {
      if (!animate) {
        setIsVisible(false);
        return;
      }
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!isVisible) {
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
      closing={isClosing}
      animate={animate}
    >
      {children}
    </ModalContent>
  );
};

export default Modal;
