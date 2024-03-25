import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Commerce7 Admin UI',
    brandUrl: 'https://commerce7.com',
    brandImage: '/logo.png',
    fontBase: '"Inter", sans-serif'
  })
});
