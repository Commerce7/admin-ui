import Alert from '.';

export const Basic = () => <Alert>This is an alert</Alert>;

Basic.story = {
  name: 'Basic'
};

export const Variants = () => (
  <>
    <Alert variant="error">This is a red error alert</Alert>
    <Alert variant="info">This is a blue info alert</Alert>
    <Alert variant="warning" icon="warning">
      This is a yellow warning alert
    </Alert>
    <Alert variant="default">This is a grey default alert</Alert>
  </>
);

Variants.story = {
  name: 'Variants'
};

export const Small = () => (
  <>
    <Alert variant="error" size="small" icon="link">
      This is a red error alert
    </Alert>
    <Alert variant="info" size="small">
      This is a blue info alert
    </Alert>
    <Alert variant="warning" size="small" icon="warning">
      This is a yellow warning alert
    </Alert>
    <Alert variant="default" size="small">
      This is a grey default alert
    </Alert>
  </>
);

Small.story = {
  name: 'Small'
};

export default {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "import { Alert } from '@commerce7/admin-ui'"
      }
    }
  }
};
