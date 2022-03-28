import { useState } from 'react';

import Stepper from '.';

const { Step } = Stepper;

export const Basic = () => {
  const [currentPath, setPath] = useState('/configure');

  return (
    <Stepper>
      <Step
        number={1}
        description="Configure"
        onClick={() => setPath('/configure')}
        className={currentPath === '/configure' ? 'active' : ''}
        icon="setting"
      />
      <Step
        number={2}
        description="Items"
        onClick={() => setPath('/items')}
        className={currentPath === '/items' ? 'active' : ''}
        icon="wine"
      />
      <Step
        number={3}
        description="Members"
        onClick={() => setPath('/members')}
        className={currentPath === '/members' ? 'active' : ''}
        icon="user"
      />
      <Step
        number={4}
        description="Inventory"
        onClick={() => setPath('/inventory')}
        className={currentPath === '/inventory' ? 'active' : ''}
        icon="inventory"
      />
    </Stepper>
  );
};

Basic.story = {
  name: 'Basic'
};

const description =
  "import { Stepper } from '@commerce7/admin-ui' <br/><br/>const { Step } = Stepper";

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  subcomponents: { Step },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
