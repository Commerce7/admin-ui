import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Breadcrumb from './Breadcrumb';
import Breadcrumbs from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          "import { Breadcrumbs } from '@commerce7/admin-ui'; <br/><br/>const { Breadcrumb } = Breadcrumbs;"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
  name: 'Basic',
  render: () => (
    <Breadcrumbs>
      <Breadcrumb href="https://commerce7.com">Settings</Breadcrumb>
      <Breadcrumb href="https://commerce7.com">Departments</Breadcrumb>
      <Breadcrumb>Edit</Breadcrumb>
    </Breadcrumbs>
  )
};

export const Click: Story = {
  name: 'Click',
  render: () => (
    <Breadcrumbs>
      <Breadcrumb onClick={action('on-click-settings')}>Settings</Breadcrumb>
      <Breadcrumb onClick={action('on-click-departments')}>
        Departments
      </Breadcrumb>
      <Breadcrumb>Edit</Breadcrumb>
    </Breadcrumbs>
  )
};
