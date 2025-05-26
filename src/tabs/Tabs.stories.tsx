import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Heading from '../heading';

import Tabs from '.';

const { Tab, TabBody } = Tabs;

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  subcomponents: { Tab, TabBody },
  parameters: {
    docs: {
      description: {
        component:
          "import { Tabs } from '@commerce7/admin-ui'<br/><br/>const { Tab, TabBody } = Tabs"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPath, setPath] = useState('/summary');

    const path = currentPath.split('/')[1];
    const heading = path.charAt(0).toUpperCase() + path.slice(1);

    return (
      <>
        <Tabs>
          <Tab
            onClick={() => setPath('/summary')}
            className={currentPath === '/summary' ? 'active' : ''}
          >
            Summary
          </Tab>
          <Tab
            onClick={() => setPath('/customers')}
            className={currentPath === '/customers' ? 'active' : ''}
          >
            Customers
          </Tab>
          <Tab
            onClick={() => setPath('/products')}
            className={currentPath === '/products' ? 'bananas' : ''}
            activeClassName="bananas"
          >
            Products
          </Tab>
        </Tabs>
        <TabBody>
          <Heading>{heading}</Heading>
        </TabBody>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic example of tabs with active state management.'
      }
    }
  }
};
