/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Legend from '../legend/Legend';

import Label from './Label';
import ToolTip from './Tooltip';

import PieChart from '.';

const meta = {
  title: 'Charts/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "import { PieChart } from '@commerce7/admin-ui' \n\n This chart is implemented using the Recharts library. For more details on how to customize and use Recharts, please refer to the [Recharts documentation](https://recharts.org/)."
      }
    }
  }
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof PieChart>;

// Sample data for both stories
const sampleData: {
  name: string;
  value: string | number;
  [key: string]: any;
}[] = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 288 },
  { name: 'Group C', value: 100 }
];

const colors = ['#42ACF0', '#DF5F5F', '#BF9D36'];

const legendData = [
  { title: 'Group A', value: '', color: '#42ACF0' },
  { title: 'Group B', value: '', color: '#DF5F5F' },
  { title: 'Group C', value: '', color: '#BF9D36' }
];

// Basic example
export const Basic: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <PieChart
        {...args}
        data={sampleData}
        colors={colors}
        label={<Label />}
        tooltip={<ToolTip />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic PieChart with tooltip and percentage labels.'
      }
    }
  }
};

// Custom legend example
export const WithCustomLegend: Story = {
  render: (args) => (
    <div style={{ height: 300 }}>
      <PieChart
        {...args}
        data={sampleData}
        colors={colors}
        label={<Label />}
        legendProps={{ layout: 'vertical' }}
        legend={<Legend data={legendData} />}
        tooltip={<ToolTip />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'PieChart with a custom vertical legend component.'
      }
    }
  }
};
