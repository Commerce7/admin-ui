import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Alert from '.';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "import { Alert } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  render: () => <Alert>This is an alert</Alert>
};

export const Variants: Story = {
  render: () => (
    <>
      <Alert variant="error">This is a red error alert</Alert>
      <Alert variant="info">This is a blue info alert</Alert>
      <Alert variant="warning" icon="warning">
        This is an orange warning alert
      </Alert>
      <Alert variant="default">This is a grey default alert</Alert>
      <Alert variant="success">This is a green success alert</Alert>
    </>
  )
};

export const Small: Story = {
  render: () => (
    <>
      <Alert variant="error" size="small" icon="link">
        This is a red error alert
      </Alert>
      <Alert variant="info" size="small">
        This is a blue info alert
      </Alert>
      <Alert variant="warning" size="small" icon="warning">
        This is an orange warning alert
      </Alert>
      <Alert variant="default" size="small">
        This is a grey default alert
      </Alert>
    </>
  )
};
