/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import styled from 'styled-components';

import Nav from '.';

const { NavLink, SubNav, SubNavLink } = Nav;

const meta = {
  title: 'Navigation/Nav',
  component: Nav,
  subcomponents: { SubNav, NavLink, SubNavLink },
  tags: ['autodocs'],
  parameters: {
    controls: { expand: true },
    docs: {
      description: {
        component:
          "import { Nav } from '@commerce7/admin-ui'<br/><br/>const { SubNav, NavLink, SubNavLink } = Nav"
      }
    }
  }
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof Nav>;

const StyledNav = styled(Nav)`
  height: 50vh;
`;

export const Basic: Story = {
  render: () => {
    const [currentPath, setPath] = useState('/dashboard');

    return (
      <StyledNav>
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic navigation with simple links and icons.'
      }
    }
  }
};

export const SubNavigation: Story = {
  render: () => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with expandable sub-navigation sections.'
      }
    }
  }
};
