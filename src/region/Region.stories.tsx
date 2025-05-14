import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Heading from '../heading';

import Region from '.';

const meta: Meta<typeof Region> = {
  title: 'UI/Region',
  component: Region,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { Region } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Region>;

export const Basic: Story = {
  render: () => (
    <>
      <Region borderBottom>
        <Heading>Region with border below</Heading>
      </Region>
      <Region>
        <Heading>Another region</Heading>
      </Region>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Basic usage of the Region component with optional border styling.'
      }
    }
  }
};
