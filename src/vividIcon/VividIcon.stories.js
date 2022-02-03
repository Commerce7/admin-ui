import VividIcon from './VividIcon';

export const basic = () => (
  <>
    <VividIcon icon="cart" color="blue" />
  </>
);

basic.story = {
  name: 'Basic'
};

export default {
  title: 'Icon/VividIcon',
  component: VividIcon,
  parameters: {
    docs: {
      description: {
        component: "import { VividIcon } from '@commerce7/admin-ui'"
      }
    }
  }
};
