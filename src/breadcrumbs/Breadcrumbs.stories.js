import Breadcrumbs from './Breadcrumbs';
import Breadcrumb from '../breadcrumb';

export const basic = () => (
  <Breadcrumbs>
    <Breadcrumb href="https://commerce7.com">Settings</Breadcrumb>
    <Breadcrumb href="https://commerce7.com">Departments</Breadcrumb>
    <Breadcrumb>Edit</Breadcrumb>
  </Breadcrumbs>
);

basic.story = {
  name: 'Basic'
};

export default {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          "import { Breadcrumbs, Breadcrumb } from '@commerce7/admin-ui'"
      }
    }
  }
};
