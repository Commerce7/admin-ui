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
    <DisplayIcon icon="cart" variant="default" />
    <DisplayIcon icon="cart" variant="success" />
    <DisplayIcon icon="cart" variant="error" />
  </>
);

variants.story = {
  name: 'Variants'
};

export const onClick = () => (
  <DisplayIcon
    icon="add"
    onClick={action('on-click')}
    label="Add to cart"
    dataTestId="testing"
  />
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
