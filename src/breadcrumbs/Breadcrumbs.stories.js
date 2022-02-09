import { action } from '@storybook/addon-actions';

import Breadcrumbs from './Breadcrumbs';
import Breadcrumb from './Breadcrumb';

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

export const onClick = () => (
  <Breadcrumbs>
    <Breadcrumb onClick={action('on-click-settings')}>Settings</Breadcrumb>
    <Breadcrumb onClick={action('on-click-departments')}>
      Departments
    </Breadcrumb>
    <Breadcrumb>Edit</Breadcrumb>
  </Breadcrumbs>
);

onClick.story = {
  name: 'Click'
};

export default {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          "import { Breadcrumbs } from '@commerce7/admin-ui'; <br/><br/>const { Breadcrumb } = Breadcrumbs;"
      }
    }
  }
};
