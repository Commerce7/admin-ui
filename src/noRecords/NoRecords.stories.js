import NoRecords from '.';

export const Basic = () => (
  <>
    <NoRecords />
  </>
);

Basic.story = {
  name: 'Basic'
};

export const Custom = () => (
  <>
    <NoRecords
      title="No orders found"
      description="Try changing your search or click Add Order on the top right"
      icon="bundle"
    />
  </>
);

Custom.story = {
  name: 'Custom'
};

export default {
  title: 'UI/NoRecords',
  component: NoRecords,
  parameters: {
    docs: {
      description: {
        component: "import { NoRecords } from '@commerce7/admin-ui'"
      }
    }
  }
};
