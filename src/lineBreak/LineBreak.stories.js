import LineBreak from '.';

export const Basic = () => <LineBreak />;

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'UI/LineBreak',
  component: LineBreak,
  parameters: {
    docs: {
      description: {
        component: "import { LineBreak } from '@commerce7/admin-ui'"
      }
    }
  }
};
