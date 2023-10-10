/* eslint-disable react/jsx-props-no-spreading */
import ProgressBar from '.';

export const Basic = (args) => (
  <>
    <ProgressBar progress={50} {...args} />
  </>
);

export const Labelled = (args) => (
  <>
    <ProgressBar
      progress={50}
      content={{ text: 'Open Rate', progress: 50, color: '#42ACF0' }}
      {...args}
    />
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
    controls: { expanded: true },
    docs: {
      description: {
        component: "import { ProgressBar } from '@commerce7/admin-ui'"
      }
    }
  }
};
