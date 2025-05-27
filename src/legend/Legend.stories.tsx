/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Legend, { LegendItem } from '.';

const meta = {
  title: 'Charts/Legend',
  component: Legend,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "import { Legend } from '@commerce7/admin-ui'"
      }
    }
  }
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof Legend>;

const legendData: LegendItem[] = [
  { title: 'POS', value: 11, color: '#42ACF0' },
  { title: 'Inbound', value: 20, color: '#DF5F5F' },
  { title: 'Web', value: 13, color: '#BF9D36' },
  { title: 'Club', value: 55, color: '#239C82' }
];

const legendData2: LegendItem[] = [
  { title: 'Guest', value: '$21', color: '#42ACF0' },
  { title: 'First-time', value: '$45', color: '#DF5F5F' },
  { title: 'Repeat', value: '$33', color: '#BF9D36' },
  { title: 'Club Member', value: '$78', color: '#239C82' }
];

const legendDataWithoutValue: LegendItem[] = [
  { title: 'Guest', value: '', color: '#42ACF0' },
  { title: 'First-time', value: '', color: '#DF5F5F' },
  { title: 'Repeat', value: '', color: '#BF9D36' },
  { title: 'Club Member', value: '', color: '#239C82' }
];

export const Default: Story = {
  render: () => <Legend isVertical={false} data={legendDataWithoutValue} />,
  parameters: {
    docs: {
      description: {
        story: 'Default horizontal legend without values'
      }
    }
  }
};

export const Vertical: Story = {
  render: () => <Legend data={legendData} isVertical />,
  parameters: {
    docs: {
      description: {
        story: 'Vertical legend with values'
      }
    }
  }
};

export const GroupedVertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 100 }}>
      <Legend
        data={legendData}
        width="30%"
        legendHeader="By Channel"
        isVertical
      />
      <Legend
        data={legendData2}
        width="30%"
        legendHeader="By Customer Type"
        isVertical
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple grouped vertical legends with headers'
      }
    }
  }
};
