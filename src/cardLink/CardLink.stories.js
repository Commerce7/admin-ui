import CardLink from '.';

export const Basic = () => (
  <>
    <CardLink
      icon="setting"
      label="General Settings"
      href="https://commerce7.com"
    >
      View and manage general settings
    </CardLink>
    <CardLink icon="user" label="Staff" href="https://commerce7.com">
      View and manage staff
    </CardLink>
  </>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'Navigation/CardLink',
  component: CardLink,
  parameters: {
    docs: {
      description: {
        component: "import { CardLink } from '@commerce7/admin-ui'"
      }
    }
  }
};
