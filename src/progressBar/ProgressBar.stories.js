/* eslint-disable react/jsx-props-no-spreading */
import ProgressBar from '.';

export const Basic = (args) => (
  <>
    <ProgressBar progress={50} {...args} />
  </>
);

export default {
  title: 'UI/ProgressBar',
  component: ProgressBar,
  argTypes: {
    color: { control: { type: 'color' } },
    progress: { control: { type: 'number', min: 0, max: 100, step: 1 } }
  },
  parameters: {
    docs: {
      description: {
        component: "import { ProgressBar } from '@commerce7/admin-ui'"
      }
    }
  }
};
