/* eslint-disable react/jsx-props-no-spreading */

import Legend from '../legend/Legend';

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

  return (
    <div style={{ height: 300 }}>
      <PieChart
        data={data}
        colors={colors}
        label={<Label />}
        tooltip={<ToolTip />}
        {...args}
      />
    </div>
  );
};

export const WithCustomLegend = (args) => {
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

  const legendData = [
    { title: 'Group A', color: '#42ACF0' },
    { title: 'Group B', color: '#DF5F5F' },
    { title: 'Group C', color: '#BF9D36' }
  ];
  const colors = ['#42ACF0', '#DF5F5F', '#BF9D36'];

  return (
    <div style={{ height: 300 }}>
      <PieChart
        data={data}
        colors={colors}
        label={<Label />}
        legendProps={{ layout: 'vertical' }}
        legend={<Legend data={legendData} />}
        tooltip={<ToolTip />}
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
        component:
          "import { PieChart } from '@commerce7/admin-ui' \n\n This chart is implemented using the Recharts library. For more details on how to customize and use Recharts, please refer to the [Recharts documentation](https://recharts.org/)."
      }
    }
  }
};
