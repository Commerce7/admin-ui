// eslint-disable-file jsx-a11y/click-events-have-key-events

import { useState } from 'react';

import SubMenu from '.';

const { SubMenuItem } = SubMenu;

export const Basic = () => {
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

Basic.story = {
  name: 'Basic'
};

const description =
  "import { SubMenu } from '@commerce7/admin-ui'<br/><br/>const { SubMenuItem } = SubMenu";

export default {
  title: 'Navigation/SubMenu',
  component: SubMenu,
  subcomponents: { SubMenuItem },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
