import { useState } from 'react';

import Menu from '.';

const { MenuLink } = Menu;

export const Basic = () => {
  const [currentPath, setPath] = useState('/dashboard');

  const paths = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/crm', icon: 'customer', label: 'CRM' },
    { path: '/store', icon: 'store', label: 'Store' },
    { path: '/club', icon: 'club', label: 'Club' }
  ];

  return (
    <Menu>
      {paths.map((path) => (
        <MenuLink
          key={path.path}
          onClick={() => setPath(path.path)}
          isActive={currentPath === path.path}
          icon={path.icon}
        >
          {path.label}
        </MenuLink>
      ))}
    </Menu>
  );
};

Basic.story = {
  name: 'Basic'
};

const description =
  "import { Menu } from '@commerce7/admin-ui'<br/><br/>const { MenuLink } = Menu";

export default {
  title: 'UI/Menu',
  component: Menu,
  subcomponents: { MenuLink },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
