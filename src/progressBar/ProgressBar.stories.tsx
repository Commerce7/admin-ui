/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ProgressBar from '.';

const meta: Meta<typeof ProgressBar> = {
  title: 'UI/ProgressBar',
  component: ProgressBar,
  argTypes: {
    color: { control: { type: 'color' } },
    progress: { control: { type: 'number', min: 0, max: 100, step: 1 } }
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "import { ProgressBar } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Basic: Story = {
  render: () => <ProgressBar progress={50} />
};

export const Labelled: Story = {
  render: () => (
    <div style={{ height: 50 }}>
      <ProgressBar
        progress={50}
        content={{
          text: 'Open Rate',
          progress: 50,
          circleColor: '#42ACF0'
        }}
      />
    </div>
  )
};
