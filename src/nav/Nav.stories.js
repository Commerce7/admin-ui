import { useState } from 'react';

import Nav from '.';

const { NavLink, SubNav, SubNavLink } = Nav;

export const Basic = () => {
  const [currentPath, setPath] = useState('/dashboard');

  return (
    <Nav>
      <NavLink
        onClick={() => setPath('/dashboard')}
        active={String(currentPath === '/dashboard')}
        icon="dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        onClick={() => setPath('/crm')}
        active={String(currentPath === '/crm')}
        icon="customer"
      >
        CRM
      </NavLink>
      <NavLink
        onClick={() => setPath('/store')}
        active={String(currentPath === '/store')}
        icon="store"
      >
        Store
      </NavLink>
      <NavLink
        onClick={() => setPath('/club')}
        active={String(currentPath === '/club')}
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

export const SubNavigation = () => {
  const [currentPath, setPath] = useState('/store/order');

  return (
    <Nav>
      <NavLink
        onClick={() => setPath('/dashboard')}
        active={String(currentPath === '/dashboard')}
        icon="dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        onClick={() => setPath('/store/order')}
        active={String(currentPath.includes('/store'))}
        icon="store"
      >
        Store
      </NavLink>
      <SubNav isOpen={currentPath.includes('/store')}>
        <SubNavLink
          onClick={() => setPath('/store/order')}
          active={String(currentPath === '/store/order')}
        >
          Order
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/store/carts')}
          active={String(currentPath === '/store/carts')}
        >
          Carts
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/store/products')}
          active={String(currentPath === '/store/products')}
        >
          Products
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/store/inventory')}
          active={String(currentPath === '/store/inventory')}
        >
          Inventory
        </SubNavLink>
      </SubNav>
      <NavLink
        onClick={() => setPath('/club/membership')}
        active={String(currentPath.includes('/club'))}
        icon="club"
      >
        Club
      </NavLink>
      <SubNav isOpen={currentPath.includes('/club')}>
        <SubNavLink
          onClick={() => setPath('/club/membership')}
          active={String(currentPath === '/club/membership')}
        >
          Memberships
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/club/subscription')}
          active={String(currentPath === '/club/subscription')}
        >
          Subscriptions
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/club/package')}
          active={String(currentPath === '/club/package')}
        >
          Packages
        </SubNavLink>
      </SubNav>
    </Nav>
  );
};

SubNavigation.story = {
  name: 'Sub Navigation'
};

const description =
  "import { Nav } from '@commerce7/admin-ui'<br/><br/>const { SubNav, NavLink, SubNavLink } = Nav";

export default {
  title: 'UI/Nav',
  component: Nav,
  subcomponents: { SubNav, NavLink, SubNavLink },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
