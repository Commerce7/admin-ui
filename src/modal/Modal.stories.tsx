import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Button from '../button';

import Modal from '.';

const { ModalBody, ModalFooter } = Modal;

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  subcomponents: { ModalBody, ModalFooter },
  parameters: {
    docs: {
      description: {
        component:
          "import { Modal } from '@commerce7/admin-ui'<br/><br/>const { ModalBody, ModalFooter } = Modal"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};
