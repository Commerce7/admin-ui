/* eslint-disable react/jsx-props-no-spreading */

import Label from './Label';
import ToolTip from './Tooltip';

import PieChart from '.';

export const Basic = (args) => {
  const data = [
    { name: 'Group A', value: 400 },
    {
      name: 'Group B',
      value: 300
    },
    {
      name: 'Group C',
      value: 100
    }
  ];
  const colors = ['#42ACF0', '#DF5F5F', '#BF9D36'];
  return (
    <PieChart
      data={data}
      colors={colors}
      label={Label}
      tooltip={ToolTip}
      {...args}
    />
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
