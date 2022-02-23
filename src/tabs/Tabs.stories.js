import { useState } from 'react';

import Tabs from '.';
import Heading from '../heading';

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
          active={String(currentPath === '/summary')}
        >
          Summary
        </Tab>
        <Tab
          onClick={() => setPath('/customers')}
          active={String(currentPath === '/customers')}
        >
          Customers
        </Tab>
        <Tab
          onClick={() => setPath('/products')}
          active={String(currentPath === '/products')}
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
