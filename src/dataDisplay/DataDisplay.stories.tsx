import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DataDisplay from '.';

const meta: Meta<typeof DataDisplay> = {
  title: 'Form/DataDisplay',
  component: DataDisplay,
  parameters: {
    docs: {
      description: {
        component: "import { DataDisplay } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof DataDisplay>;

export const Basic: Story = {
  render: () => <DataDisplay label="First Name">Jim Smith</DataDisplay>
};
