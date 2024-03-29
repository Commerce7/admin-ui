import { action } from '@storybook/addon-actions';

import DisplayIcon from './DisplayIcon';

export const basic = () => (
  <>
    <DisplayIcon icon="cart" />
  </>
);

basic.story = {
  name: 'Basic'
};

export const variants = () => (
  <>
    <DisplayIcon icon="search" variant="default" />
    <DisplayIcon icon="checkCircle" variant="success" />
    <DisplayIcon icon="warning" variant="warning" />
    <DisplayIcon icon="closeCircle" variant="error" />
  </>
);

variants.story = {
  name: 'Variants'
};

export const onClick = () => (
  <DisplayIcon icon="add" onClick={action('on-click')} label="Add to cart" />
);

onClick.story = {
  name: 'Click'
};

export default {
  title: 'Icon/DisplayIcon',
  component: DisplayIcon,
  parameters: {
    docs: {
      description: {
        component: "import { DisplayIcon } from '@commerce7/admin-ui'"
      }
    }
  }
};
