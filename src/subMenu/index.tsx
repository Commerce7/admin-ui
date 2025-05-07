import SubMenuComponent, { SubMenuProps } from './SubMenu';
import SubMenuItem, { SubMenuItemProps } from './SubMenuItem';

const SubMenu = Object.assign(SubMenuComponent, { SubMenuItem });

export type { SubMenuItemProps, SubMenuProps };

export default SubMenu;
