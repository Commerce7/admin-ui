import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Text from './Text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "import { Text } from '@commerce7/admin-ui'"
      }
    }
  }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <>
      <Text>Wine</Text>
      <br />
      <Text secondary>Secondary text</Text>
      <br />
      <Text italic small>
        Italic small Wine
      </Text>
      <Text error block>
        Error, not enough wine.
      </Text>
      <Text strong>Strong</Text>
      <br />
      <Text uppercase>Limited Offer</Text>
      <br />
      <Text strikeThrough>$24.99</Text>
    </>
  ),
  storyName: 'Basic'
};
