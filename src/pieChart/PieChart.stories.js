/* eslint-disable react/jsx-props-no-spreading */

import Legend from '../legend';

import Label from './Label';
import ToolTip from './Tooltip';

import PieChart from '.';

export const Basic = (args) => {
  const data = [
    { name: 'Group A', value: 400 },
    {
      name: 'Group B',
      value: 288
    },
    {
      name: 'Group C',
      value: 100
    }
  ];

  const colors = ['#42ACF0', '#DF5F5F', '#BF9D36'];
  const legendData = [
    { title: 'POS', value: 11, color: '#42ACF0' },
    { title: 'Inbound', value: 20, color: '#DF5F5F' },
    { title: 'Web', value: 13, color: '#BF9D36' },
    { title: 'Club', value: 55, color: '#239C82' }
  ];
  return (
    <div style={{ height: 300 }}>
      <PieChart
        data={data}
        colors={colors}
        label={<Label />}
        tooltip={<ToolTip />}
        legend={<Legend data={legendData} width="30%" />}
        {...args}
      />
    </div>
  );
};

export default {
  title: 'Charts/PieChart',
  component: PieChart,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "import { PieChart } from '@commerce7/admin-ui'"
      }
    }
  }
};
