import { TabsStyles } from './Tabs.styles';

const Tabs = (props) => {
  const { children } = props;
  return <TabsStyles aria-label="Secondary navigation">{children}</TabsStyles>;
};

export default Tabs;
