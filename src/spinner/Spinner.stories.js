import Spinner from '.';

export const Basic = () => (
  <>
    <Spinner />
  </>
);

Basic.story = {
  name: 'Basic'
};

export const Labelled = () => (
  <>
    <Spinner label="Loading..." />
  </>
);

Labelled.story = {
  name: 'Labelled'
};

export default {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: "import { Spinner } from '@commerce7/admin-ui'"
      }
    }
  }
};
