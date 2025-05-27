import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import LineBreak from '.';

const meta: Meta<typeof LineBreak> = {
  title: 'UI/LineBreak',
  component: LineBreak,
  parameters: {
    docs: {
      description: {
        component: "import { LineBreak } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof LineBreak>;

export const Basic: Story = {
  render: () => <LineBreak />
};
