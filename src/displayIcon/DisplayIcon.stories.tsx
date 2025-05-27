import { action } from '@storybook/addon-actions';
import React from 'react';

import DisplayIcon from './DisplayIcon';

export const Basic = () => <DisplayIcon icon="cart" />;
Basic.storyName = 'Basic';

export const Variants = () => (
  <>
    <DisplayIcon icon="search" variant="default" />
    <DisplayIcon icon="checkCircle" variant="success" />
    <DisplayIcon icon="warning" variant="warning" />
    <DisplayIcon icon="closeCircle" variant="error" />
  </>
);
Variants.storyName = 'Variants';

export const Click = () => (
  <DisplayIcon icon="add" onClick={action('on-click')} label="Add to cart" />
);
Click.storyName = 'Click';

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
