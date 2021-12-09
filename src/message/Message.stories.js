import Message from '.';

export const Basic = () => <Message>This is a message</Message>;

Basic.story = {
  name: 'Basic'
};

export const Variants = () => (
  <>
    <Message variant="default">This is a default message</Message>
    <Message variant="success">This is a success message</Message>
    <Message variant="error">This is an error message</Message>
    <Message variant="warning">This is a warning message</Message>
    <Message variant="info">This is an info message</Message>
  </>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'UI/Message',
  component: Message,
  parameters: {
    docs: {
      description: {
        component: "import { Message } from '@commerce7/admin-ui'"
      }
    }
  }
};
