import { useState } from 'react';
import Button from '../button';

import Modal from '.';

const { ModalBody, ModalFooter } = Modal;

export const Basic = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal title="Confirm" onClose={closeModal} visible={visible}>
        <ModalBody>Are you sure you want to proceed?</ModalBody>
        <ModalFooter>
          <Button onClick={closeModal} variant="secondary">
            Close
          </Button>
          <Button onClick={closeModal}>Continue</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

Basic.story = {
  name: 'Basic'
};

const description =
  "import { Modal } from '@commerce7/admin-ui'<br/><br/>const { ModalBody, ModalFooter } = Modal";

export default {
  title: 'UI/Modal',
  component: Modal,
  subcomponents: { ModalBody, ModalFooter },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
