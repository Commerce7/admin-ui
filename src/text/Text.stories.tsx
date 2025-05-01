import Text from './Text';

export const Basic = () => (
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
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "import { Text } from '@commerce7/admin-ui'"
      }
    }
  }
};
