/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled from 'styled-components';

import Nav from '.';

const { NavLink, SubNav, SubNavLink } = Nav;

export const Basic = (args) => {
  const [currentPath, setPath] = useState('/dashboard');

  return (
    <StyledNav {...args}>
      <NavLink
        onClick={() => setPath('/dashboard')}
        className={currentPath === '/dashboard' ? 'active' : ''}
        icon="dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        onClick={() => setPath('/crm')}
        className={currentPath === '/crm' ? 'active' : ''}
        icon="customer"
      >
        CRM
      </NavLink>
      <NavLink
        onClick={() => setPath('/store')}
        className={currentPath === '/store' ? 'active' : ''}
        icon="store"
      >
        Store
      </NavLink>
      <NavLink
        onClick={() => setPath('/club')}
        className={currentPath === '/club' ? 'active' : ''}
        icon="club"
      >
        Club
      </NavLink>
    </StyledNav>
  );
};

export const SubNavigation = () => {
  const [currentPath, setPath] = useState('/store/order');

  return (
    <StyledNav>
      <NavLink
        onClick={() => setPath('/dashboard')}
        className={currentPath === '/dashboard' ? 'active' : ''}
        icon="dashboard"
      >
        Dashboard
      </NavLink>

      {/* Example using a custom activeClassName: */}
      <NavLink
        onClick={() => setPath('/store/order')}
        className={currentPath.includes('/store') ? 'randomClassName' : ''}
        activeClassName="randomClassName"
        icon="store"
      >
        Store
      </NavLink>
      <SubNav isOpen={currentPath.includes('/store')}>
        <SubNavLink
          onClick={() => setPath('/store/order')}
          className={currentPath === '/store/order' ? 'active' : ''}
        >
          Order
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/store/carts')}
          className={currentPath === '/store/carts' ? 'active' : ''}
        >
          Carts
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/store/products')}
          className={currentPath === '/store/products' ? 'active' : ''}
        >
          Products
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/store/inventory')}
          className={currentPath === '/store/inventory' ? 'active' : ''}
        >
          Inventory
        </SubNavLink>
      </SubNav>
      <NavLink
        onClick={() => setPath('/club/membership')}
        className={currentPath.includes('/club') ? 'active' : ''}
        icon="club"
      >
        Club
      </NavLink>
      <SubNav isOpen={currentPath.includes('/club')}>
        <SubNavLink
          onClick={() => setPath('/club/membership')}
          className={currentPath === '/club/membership' ? 'active' : ''}
        >
          Memberships
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/club/subscription')}
          className={currentPath === '/club/subscription' ? 'active' : ''}
        >
          Subscriptions
        </SubNavLink>
        <SubNavLink
          onClick={() => setPath('/club/package')}
          className={currentPath === '/club/package' ? 'active' : ''}
        >
          Packages
        </SubNavLink>
      </SubNav>
    </StyledNav>
  );
};

const description =
  "import { Nav } from '@commerce7/admin-ui'<br/><br/>const { SubNav, NavLink, SubNavLink } = Nav";

const StyledNav = styled(Nav)`
  height: 50vh;
`;

export default {
  title: 'Navigation/Nav',
  component: Nav,
  subcomponents: { SubNav, NavLink, SubNavLink },
  parameters: {
    controls: { expand: true },
    docs: {
      description: {
        component: description
      }
    }
  }
};
