import { useState } from 'react';

import Nav from '.';

const { NavLink } = Nav;

export const Basic = () => {
  const [currentPath, setPath] = useState('/dashboard');

  return (
    <Nav>
      <NavLink
        onClick={() => setPath('/dashboard')}
        isActive={currentPath === '/dashboard'}
        icon="dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        onClick={() => setPath('/crm')}
        isActive={currentPath === '/crm'}
        icon="customer"
      >
        CRM
      </NavLink>
      <NavLink
        onClick={() => setPath('/store')}
        isActive={currentPath === '/store'}
        icon="store"
      >
        Store
      </NavLink>
      <NavLink
        onClick={() => setPath('/club')}
        isActive={currentPath === '/club'}
        icon="club"
      >
        Club
      </NavLink>
    </Nav>
  );
};

Basic.story = {
  name: 'Basic'
};

const description =
  "import { Nav } from '@commerce7/admin-ui'<br/><br/>const { NavLink } = Nav";

export default {
  title: 'UI/Nav',
  component: Nav,
  subcomponents: { NavLink },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
