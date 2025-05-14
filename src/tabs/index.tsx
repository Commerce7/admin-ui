import Tab, { TabProps } from './Tab';
import TabBody, { TabBodyProps } from './TabBody';
import TabsComponent, { TabsProps } from './Tabs';

const Tabs = Object.assign(TabsComponent, {
  Tab,
  TabBody
});

export type { TabProps, TabBodyProps, TabsProps };

export default Tabs;
