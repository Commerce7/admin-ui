/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Stepper from '.';

const { Step } = Stepper;

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  subcomponents: { Step },
  parameters: {
    docs: {
      description: {
        component:
          "import { Stepper } from '@commerce7/admin-ui' <br/><br/>const { Step } = Stepper"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Basic: Story = {
  render: () => {
    const [currentPath, setPath] = useState('/configure');

    return (
      <Stepper>
        <Step
          step={1}
          description="Configure"
          onClick={() => setPath('/configure')}
          className={currentPath === '/configure' ? 'active' : ''}
          icon="setting"
        />
        <Step
          step={2}
          description="Items"
          onClick={() => setPath('/items')}
          className={currentPath === '/items' ? 'active' : ''}
          icon="wine"
        />
        <Step
          step={3}
          description="Members"
          onClick={() => setPath('/members')}
          className={currentPath === '/members' ? 'active' : ''}
          icon="user"
        />
        <Step
          step={4}
          description="Inventory"
          onClick={() => setPath('/inventory')}
          className={currentPath === '/inventory' ? 'active' : ''}
          icon="inventory"
        />
      </Stepper>
    );
  }
};
