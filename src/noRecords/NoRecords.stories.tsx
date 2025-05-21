import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import NoRecords from '.';

const meta: Meta<typeof NoRecords> = {
  title: 'UI/NoRecords',
  component: NoRecords,
  parameters: {
    docs: {
      description: {
        component: "import { NoRecords } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof NoRecords>;

export const Basic: Story = {
  render: () => <NoRecords />
};

export const Custom: Story = {
  render: () => (
    <>
      <NoRecords
        title="No orders found"
        description="Try changing your search or click Add Order on the top right"
        icon="bundle"
      />
      <NoRecords
        title="No orders found"
        description="With iconVariant set to warning"
        icon="bundle"
        iconVariant="warning"
      />
    </>
  )
};
