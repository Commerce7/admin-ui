import ModalComponent, { ModalProps } from './Modal';
import ModalBody, { ModalBodyProps } from './ModalBody';
import ModalFooter, { ModalFooterProps } from './ModalFooter';

const Modal = Object.assign(ModalComponent, { ModalBody, ModalFooter });

export type { ModalProps, ModalBodyProps, ModalFooterProps };

export default Modal;
