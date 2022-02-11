import { MenuStyles } from './Menu.styles';

const Menu = (props) => {
  const { children } = props;
  return <MenuStyles>{children}</MenuStyles>;
};

export default Menu;
