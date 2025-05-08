import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: "import { Spinner } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  render: () => <Spinner />
};

export const Labelled: Story = {
  render: () => <Spinner label="Loading..." />
};
