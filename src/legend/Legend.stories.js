/* eslint-disable react/jsx-props-no-spreading */

import Legend from '.';

const legendData = [
  { title: 'POS', value: 11, color: '#42ACF0' },
  { title: 'Inbound', value: 20, color: '#DF5F5F' },
  { title: 'Web', value: 13, color: '#BF9D36' },
  { title: 'Club', value: 55, color: '#239C82' }
];

const legendData2 = [
  { title: 'Guest', value: '$21', color: '#42ACF0' },
  { title: 'First-time', value: '$45', color: '#DF5F5F' },
  { title: 'Repeat', value: '$33', color: '#BF9D36' },
  { title: 'Club Member', value: '$78', color: '#239C82' }
];

export const Basic = (args) => (
  <div>
    <Legend data={legendData} {...args} />
  </div>
);

export const Grouped = (args) => (
  <div style={{ display: 'flex', gap: 100 }}>
    <Legend data={legendData} legendHeader="By Channel" {...args} />
    <Legend data={legendData2} legendHeader="By Customer Type" {...args} />
  </div>
);

export default {
  title: 'Charts/Legend',
  component: Legend,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "import { Legend } from '@commerce7/admin-ui'"
      }
    }
  }
};
