import ButtonMenuComponent, { ButtonMenuProps } from './ButtonMenu';
import ButtonMenuItem, { ButtonMenuItemProps } from './ButtonMenuItem';

const ButtonMenu = Object.assign(ButtonMenuComponent, { ButtonMenuItem });

export type { ButtonMenuProps, ButtonMenuItemProps };
export default ButtonMenu;
