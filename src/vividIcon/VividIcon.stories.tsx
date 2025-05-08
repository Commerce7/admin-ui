import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import VividIcon from './VividIcon';

const meta = {
  title: 'Icon/VividIcon',
  component: VividIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { VividIcon } from '@commerce7/admin-ui'"
      }
    }
  }
} satisfies Meta<typeof VividIcon>;

export default meta;
type Story = StoryObj<typeof VividIcon>;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

// Basic example
export const Basic: Story = {
  render: () => (
    <>
      <VividIcon icon="cart" color="blue" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of VividIcon with a blue cart icon.'
      }
    }
  }
};

// Colors example
export const Colors: Story = {
  render: () => (
    <Container>
      <VividIcon icon="archive" color="pink" />
      <VividIcon icon="car" color="blue" />
      <VividIcon icon="cashier" color="green" />
      <VividIcon icon="chat" color="teal" />
      <VividIcon icon="carrot" color="orange" />
      <VividIcon icon="bag" color="purple" />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'VividIcon supports six different colors: pink, blue, green, teal, orange, and purple.'
      }
    }
  }
};

// Click example
export const Click: Story = {
  render: () => (
    <Container>
      <VividIcon
        icon="archive"
        color="pink"
        onClick={action('archive-click')}
        label="archive"
      />
      <VividIcon
        icon="car"
        color="blue"
        onClick={action('car-click')}
        label="car"
      />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'VividIcon can be made clickable by providing an onClick handler and label.'
      }
    }
  }
};
