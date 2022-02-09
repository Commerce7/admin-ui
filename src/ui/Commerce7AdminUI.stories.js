import Commerce7AdminUI from '.';

export const Basic = () => (
  <Commerce7AdminUI mode="light">
    <div>Application Code</div>
  </Commerce7AdminUI>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'Commerce7AdminUI',
  component: Commerce7AdminUI,
  parameters: {
    docs: {
      description: {
        component: "import { Commerce7AdminUI } from '@commerce7/admin-ui'"
      }
    }
  }
};
