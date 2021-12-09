import DataDisplay from '.';

export const Basic = () => (
  <DataDisplay label="First Name">Jim Smith</DataDisplay>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'Form/DataDisplay',
  component: DataDisplay,
  parameters: {
    docs: {
      description: {
        component: "import { DataDisplay } from '@commerce7/admin-ui'"
      }
    }
  }
};
