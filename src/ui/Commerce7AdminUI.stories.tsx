import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Commerce7AdminUI from '.';

const meta: Meta<typeof Commerce7AdminUI> = {
  title: 'Commerce7AdminUI',
  component: Commerce7AdminUI,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { Commerce7AdminUI } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Commerce7AdminUI>;

export const Basic: Story = {
  render: () => (
    <Commerce7AdminUI mode="light">
      <div>Application Code</div>
    </Commerce7AdminUI>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Commerce7AdminUI wrapper component that provides theming for the application.'
      }
    }
  }
};

export const DarkMode: Story = {
  render: () => (
    <Commerce7AdminUI mode="dark">
      <div>Application Code in Dark Mode</div>
    </Commerce7AdminUI>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Commerce7AdminUI with dark mode enabled.'
      }
    }
  }
};
