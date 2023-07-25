import { action } from '@storybook/addon-actions';

import ContextMenu from '.';

const { ContextMenuItem, ContextMenuMoreActions } = ContextMenu;

export const Basic = () => (
  <ContextMenu>
    <ContextMenuItem icon="export" onClick={action('clicked')}>
      Export
    </ContextMenuItem>
  </ContextMenu>
);

Basic.story = {
  name: 'Basic'
};

export const MoreActions = () => (
  <ContextMenu>
    <ContextMenuItem icon="export" onClick={action('clicked')}>
      Export
    </ContextMenuItem>
    <ContextMenuMoreActions>
      <ContextMenuItem icon="trash" onClick={action('clicked')}>
        Delete
      </ContextMenuItem>
    </ContextMenuMoreActions>
  </ContextMenu>
);

MoreActions.story = {
  name: 'More Actions'
};

export const Disabled = () => (
  <ContextMenu>
    <ContextMenuItem icon="export" onClick={action('clicked')} disabled>
      Export
    </ContextMenuItem>
    <ContextMenuMoreActions disabled>
      <ContextMenuItem icon="trash" onClick={action('clicked')} disabled>
        Delete
      </ContextMenuItem>
    </ContextMenuMoreActions>
  </ContextMenu>
);

Disabled.story = {
  name: 'Disabled'
};

export const MoreActionsOverride = () => (
  <ContextMenu>
    <ContextMenuItem icon="export" onClick={action('clicked')}>
      Export
    </ContextMenuItem>
    <ContextMenuMoreActions label="Actions">
      <ContextMenuItem icon="trash" onClick={action('clicked')}>
        Delete
      </ContextMenuItem>
    </ContextMenuMoreActions>
  </ContextMenu>
);

MoreActionsOverride.story = {
  name: 'MoreActionsOverride'
};

const description = `
import { ContextMenu } from '@commerce7/admin-ui'<br/><br/>const { ContextMenuItem, ContextMenuMoreActions } = ContextMenu
`;

export default {
  title: 'Button/ContextMenu',
  component: ContextMenu,
  subcomponents: { ContextMenuItem, ContextMenuMoreActions },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
