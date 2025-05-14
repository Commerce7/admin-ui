// eslint-disable-file jsx-a11y/click-events-have-key-events

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import SubMenu from '.';

const { SubMenuItem } = SubMenu;

const meta: Meta<typeof SubMenu> = {
  title: 'Navigation/SubMenu',
  component: SubMenu,
  subcomponents: { SubMenuItem },
  parameters: {
    docs: {
      description: {
        component:
          "import { SubMenu } from '@commerce7/admin-ui'<br/><br/>const { SubMenuItem } = SubMenu"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SubMenu>;

// Create a separate component for the story with state
const BasicExample = () => {
  const [path, setPath] = useState('/customer');

  return (
    <SubMenu borderBottom>
      <SubMenuItem
        onClick={() => setPath('/customer')}
        className={path === '/customer' ? 'active' : ''}
      >
        Customer
      </SubMenuItem>
      <SubMenuItem
        onClick={() => setPath('/order')}
        className={path === '/order' ? 'active' : ''}
      >
        Order
      </SubMenuItem>
      <SubMenuItem
        onClick={() => setPath('/reservation')}
        className={path === '/reservation' ? 'active' : ''}
      >
        Reservation
      </SubMenuItem>
    </SubMenu>
  );
};

export const Basic: Story = {
  render: () => <BasicExample />
};
