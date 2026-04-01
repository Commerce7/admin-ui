import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import DisplayIcon from './DisplayIcon';

const meta: Meta<typeof DisplayIcon> = {
  title: 'Icon/DisplayIcon',
  component: DisplayIcon,
  parameters: {
    docs: {
      description: {
        component: "import { DisplayIcon } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof DisplayIcon>;

export const Basic: Story = {
  render: () => <DisplayIcon icon="cart" />
};

export const Variants: Story = {
  render: () => (
    <>
      <DisplayIcon icon="search" variant="default" />
      <DisplayIcon icon="checkCircle" variant="success" />
      <DisplayIcon icon="warning" variant="warning" />
      <DisplayIcon icon="closeCircle" variant="error" />
    </>
  )
};

export const Click: Story = {
  render: () => (
    <DisplayIcon icon="add" onClick={action('on-click')} label="Add to cart" />
  )
};
