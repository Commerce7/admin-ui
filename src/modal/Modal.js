import PropTypes from 'prop-types';

import ModalContent from './ModalContent';

const Modal = (props) => {
  const {
    children = null,
    className = '',
    onClose = null,
    title = null,
    visible = false,
    dataTestId = null,
    disableBodyScroll = null,
    disableFocusLock = true
  } = props;

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

Modal.propTypes = {
  /**
   * The content of the component.
   * Children should be rendered using ModalBody and ModalFooter
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Disable scrolling on document.body while the modal is open.
   * Setting disableBodyScroll to false should rarely be used.
   */
  disableBodyScroll: PropTypes.bool,

  /**
   * Callback fired when the modal is closed.
   */
  onClose: PropTypes.func,

  /**
   * The title of the modal.
   */
  title: PropTypes.string,

  /**
   * Set the visibility of the Modal
   */
  visible: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Modal;
