import { addDecorator } from '@storybook/react';

import StoriesWrapper from '../src/stories/StoriesWrapper';

addDecorator((story) => <StoriesWrapper>{story()}</StoriesWrapper>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
