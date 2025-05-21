import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Input from '../input';
import Tag from '../tag';

import Columns from '.';

const { Column } = Columns;

const meta: Meta<typeof Columns> = {
  title: 'UI/Columns',
  component: Columns,
  subcomponents: { Column },
  parameters: {
    docs: {
      description: {
        component:
          "import { Columns } from '@commerce7/admin-ui'<br/><br/>const { Column } = Columns"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Columns>;

export const Basic: Story = {
  name: 'Basic',
  render: () => (
    <Columns>
      <Column span={6}>
        <Input label="Product Title" />
      </Column>
      <Column span={6}>
        <Input label="SKU" />
      </Column>
    </Columns>
  )
};

export const DifferentSpans: Story = {
  name: 'Different Spans',
  render: () => (
    <Columns align="center">
      <Column span={4}>
        <Input label="Product Title" />
      </Column>
      <Column span={2}>
        <Input label="SKU" />
      </Column>
      <Column span={6}>
        <Tag>Default</Tag>
        <Tag>Wine</Tag>
        <Tag>Bottle</Tag>
      </Column>
    </Columns>
  )
};
