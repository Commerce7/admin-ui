/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Heading from '../heading/Heading';
import Text from '../text/Text';

import Card, { CardProps } from '.';

export const Basic = (args: React.JSX.IntrinsicAttributes & CardProps) => (
  <>
    <Card className="example-class__wine-joke--lame" {...args}>
      <Heading>John Smith</Heading>
      <Text>
        &quot;What did the grape say when the elephant stood on it? Nothing, it
        just let out a little wine.&quot;
      </Text>
    </Card>
  </>
);

Basic.args = {
  variant: 'default'
};

export default {
  title: 'UI/Card',
  component: Card,
  argsType: {
    variant: {
      control: { type: 'radio', options: ['default', 'white'] }
    }
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "import { Card } from '@commerce7/admin-ui'"
      }
    }
  }
};
