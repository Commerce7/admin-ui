import Heading from '.';

export const Basic = () => (
  <>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
  </>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: "import { Heading } from '@commerce7/admin-ui'"
      }
    }
  }
};
