import { TabBodyStyles } from './Tabs.styles';

const TabBody = (props) => {
  const { children } = props;

  return <TabBodyStyles>{children}</TabBodyStyles>;
};

export default TabBody;
