import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import CardLink from '.';

const meta: Meta<typeof CardLink> = {
  title: 'Navigation/CardLink',
  component: CardLink,
  parameters: {
    docs: {
      description: {
        component: "import { CardLink } from '@commerce7/admin-ui'"
      }
    }
  },
  argTypes: {
    icon: {
      description: 'Add an icon to the start of the element',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    label: {
      description: 'The label for the component',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    href: {
      description: 'The url to link to',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    children: {
      description: 'The content of the component',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardLink>;

export const Basic: Story = {
  render: () => (
    <>
      <CardLink
        icon="setting"
        label="General Settings"
        href="https://commerce7.com"
      >
        View and manage general settings
      </CardLink>
      <CardLink icon="user" label="Staff" href="https://commerce7.com">
        View and manage staff
      </CardLink>
    </>
  )
};
