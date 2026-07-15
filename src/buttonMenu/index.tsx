import ButtonMenuComponent, {
  ButtonMenuProps,
  ButtonSize,
  ButtonVariant
} from './ButtonMenu';
import ButtonMenuItem, { ButtonMenuItemProps } from './ButtonMenuItem';

const ButtonMenu = Object.assign(ButtonMenuComponent, { ButtonMenuItem });

export type { ButtonMenuProps, ButtonMenuItemProps, ButtonSize, ButtonVariant };
export default ButtonMenu;
