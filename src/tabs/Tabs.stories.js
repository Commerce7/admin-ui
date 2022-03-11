import { useState } from 'react';

import Heading from '../heading';

import Tabs from '.';

const { Tab, TabBody } = Tabs;

export const Basic = () => {
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
};

Basic.story = {
  name: 'Basic'
};

const description =
  "import { Tabs } from '@commerce7/admin-ui'<br/><br/>const { Tab, TabBody } = Tabs";

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  subcomponents: { Tab, TabBody },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
