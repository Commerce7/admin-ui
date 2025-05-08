/* globals document */
import React, { ReactNode, useEffect, MouseEvent } from 'react';
import ReactDom from 'react-dom';
import FocusLock from 'react-focus-lock';

import Icon from '../icon';
import useEscKeydown from '../utils/hooks/useEscKeydown';

import {
  StyledModalBackground,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle
} from './Modal.styles';

export interface ModalContentProps {
  /**
   * The content of the component.
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
  onClose?: ((e: MouseEvent | KeyboardEvent) => void) | null;

  /**
   * The title of the modal.
   */
  title?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Disable focus lock on modal
   */
  disableFocusLock?: boolean;
}

const ModalContent = ({
  children = null,
  className = '',
  onClose = null,
  title = '',
  dataTestId = '',
  disableBodyScroll = true,
  disableFocusLock = false
}: ModalContentProps) => {
  useEscKeydown((e) => handleClose(e));

  useEffect(() => {
    if (disableBodyScroll) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [disableBodyScroll]);

  const handleBackgroundClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleClose = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    if (onClose) {
      onClose(e);
    }
  };

  return ReactDom.createPortal(
    <FocusLock autoFocus={false} disabled={disableFocusLock}>
      <StyledModalBackground
        onClick={handleBackgroundClick}
        className={className}
      >
        <StyledModalContent data-testid={dataTestId}>
          {title && (
            <StyledModalHeader>
              <StyledModalTitle>{title}</StyledModalTitle>
              {onClose && (
                <Icon icon="close" onClick={handleClose} label="Close modal" />
              )}
            </StyledModalHeader>
          )}
          {children}
        </StyledModalContent>
      </StyledModalBackground>
    </FocusLock>,
    document.body
  );
};

export default ModalContent;
