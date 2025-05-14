import ContextMenuComponent, { ContextMenuProps } from './ContextMenu';
import ContextMenuItem, { ContextMenuItemProps } from './ContextMenuItem';
import ContextMenuMoreActions, {
  ContextMenuMoreActionsProps
} from './ContextMenuMoreActions';

const ContextMenu = Object.assign(ContextMenuComponent, {
  ContextMenuItem,
  ContextMenuMoreActions
});

export type {
  ContextMenuItemProps,
  ContextMenuMoreActionsProps,
  ContextMenuProps
};
export default ContextMenu;
