import Heading from '../heading';

import Region from '.';

export const Basic = () => (
  <>
    <Region borderBottom>
      <Heading>Region with border below</Heading>
    </Region>
    <Region>
      <Heading>Another region</Heading>
    </Region>
  </>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'UI/Region',
  component: Region,
  parameters: {
    docs: {
      description: {
        component: "import { Region } from '@commerce7/admin-ui'"
      }
    }
  }
};
