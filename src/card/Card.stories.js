import Heading from '../heading/Heading';
import Text from '../text/Text';

import Card from '.';

export const Basic = () => (
  <>
    <Card className="example-class__wine-joke--lame">
      <Heading>John Smith</Heading>
      <Text>
        &quot;What did the grape say when the elephant stood on it? Nothing, it
        just let out a little wine.&quot;
      </Text>
    </Card>
  </>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "import { Card } from '@commerce7/admin-ui'"
      }
    }
  }
};
