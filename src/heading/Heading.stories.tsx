/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Heading from '.';

export const Basic = (args) => (
  <>
    <Heading level={1} {...args}>
      Heading 1
    </Heading>
    <Heading level={2} {...args}>
      Heading 2
    </Heading>
    <Heading level={3} {...args}>
      Heading 3
    </Heading>
    <Heading level={4} {...args}>
      Heading 4
    </Heading>
  </>
);

export const WithCustomMarginBottom = (args) => (
  <Heading level={4} marginBottom="5px" {...args}>
    Heading 4 with Custom Margin Bottom
  </Heading>
);

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "import { Heading } from '@commerce7/admin-ui'"
      }
    }
  }
};
