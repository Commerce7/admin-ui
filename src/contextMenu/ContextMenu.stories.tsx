import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ContextMenu from '.';

const { ContextMenuItem, ContextMenuMoreActions } = ContextMenu;

const meta: Meta<typeof ContextMenu> = {
  title: 'Button/ContextMenu',
  component: ContextMenu,
  subcomponents: { ContextMenuItem, ContextMenuMoreActions },
  parameters: {
    docs: {
      description: {
        component:
          "import { ContextMenu } from '@commerce7/admin-ui'<br/><br/>const { ContextMenuItem, ContextMenuMoreActions } = ContextMenu"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Basic: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuItem icon="export" onClick={action('clicked')}>
        Export
      </ContextMenuItem>
    </ContextMenu>
  )
};

export const MoreActions: Story = {
  render: () => (
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
  )
};

export const Disabled: Story = {
  render: () => (
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
  )
};

export const MoreActionsOverride: Story = {
  render: () => (
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
  )
};
