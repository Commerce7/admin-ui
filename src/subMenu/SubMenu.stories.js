// eslint-disable-file jsx-a11y/click-events-have-key-events

import { useState } from 'react';

import SubMenu from '.';

export const Basic = () => {
  const [path, setPath] = useState('/customer');

  return (
    <SubMenu borderBottom>
      {/* eslint-disable */}
      <a
        onClick={() => setPath('/customer')}
        className={path === '/customer' ? 'active' : ''}
      >
        Customer
      </a>
      <a
        onClick={() => setPath('/order')}
        className={path === '/order' ? 'active' : ''}
      >
        Order
      </a>
      <a
        onClick={() => setPath('/club-membership')}
        className={path === '/club-membership' ? 'active' : ''}
      >
        Club Membership
      </a>
      <a
        onClick={() => setPath('/reservation')}
        className={path === '/reservation' ? 'active' : ''}
      >
        Reservation
      </a>
      {/* eslint-enable */}
    </SubMenu>
  );
};

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'Navigation/SubMenu',
  component: SubMenu,
  parameters: {
    docs: {
      description: {
        component: `import { SubMenu } from '@commerce7/admin-ui'`
      }
    }
  }
};
