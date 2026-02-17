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

export const Link: Story = {
  render: () => {
    // Mock router component for demonstration
    const MockRouterLink = ({ to, children, ...props }: any) => (
      <a {...props} href={to}>
        {children}
      </a>
    );

    return (
      <>
        <Alert href="https://www.commerce7.com/" variant="error">
          Regular link with href prop
        </Alert>
        <Alert
          component={MockRouterLink}
          to="/dashboard"
          variant="warning"
          icon="warning"
        >
          Router link using component prop
        </Alert>
        <Alert
          component="a"
          href="mailto:support@commerce7.com"
          variant="success"
        >
          Email link using component prop
        </Alert>
      </>
    );
  }
};
