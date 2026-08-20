import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Legend from '../legend/Legend';
import { c7Colors } from '../ui/theme';

import ToolTip from './Tooltip';

import BarChart from '.';

const meta = {
  title: 'Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "import { BarChart } from '@commerce7/admin-ui' \n\n This chart is implemented using the Recharts library. For more details on how to customize and use Recharts, please refer to the [Recharts documentation](https://recharts.org/)."
      }
    }
  }
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof BarChart>;

const sampleData = [
  { period: 'Jan', groupA: 120, groupB: 95, groupC: 180 },
  { period: 'Feb', groupA: 140, groupB: 110, groupC: 190 },
  { period: 'Mar', groupA: 100, groupB: 130, groupC: 200 },
  { period: 'Apr', groupA: 160, groupB: 120, groupC: 210 },
  { period: 'May', groupA: 130, groupB: 105, groupC: 195 },
  { period: 'Jun', groupA: 150, groupB: 140, groupC: 220 }
];

const allSeries = [
  { key: 'groupA', label: 'Group A', color: c7Colors.blue300 },
  { key: 'groupB', label: 'Group B', color: c7Colors.blue600 },
  { key: 'groupC', label: 'Group C', color: c7Colors.purple300 }
];

const legendData = allSeries.map((s) => ({
  title: s.label,
  value: '' as string | number,
  color: s.color
}));

export const Basic: Story = {
  render: () => (
    <div>
      <BarChart data={sampleData} series={allSeries} tooltip={<ToolTip />} />
      <Legend data={legendData} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic horizontal BarChart with multiple series and a tooltip.'
      }
    }
  }
};

export const SingleSeries: Story = {
  render: () => {
    const single = [allSeries[0]];
    const singleLegend = [legendData[0]];
    return (
      <div>
        <BarChart data={sampleData} series={single} tooltip={<ToolTip />} />
        <Legend data={singleLegend} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'BarChart with a single series.'
      }
    }
  }
};

export const TwoSeries: Story = {
  render: () => {
    const two = allSeries.slice(0, 2);
    const twoLegend = legendData.slice(0, 2);
    return (
      <div>
        <BarChart data={sampleData} series={two} tooltip={<ToolTip />} />
        <Legend data={twoLegend} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'BarChart with two series.'
      }
    }
  }
};
