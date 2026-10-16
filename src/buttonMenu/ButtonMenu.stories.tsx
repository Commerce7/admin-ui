import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../button';

import ButtonMenu from '.';

const { ButtonMenuItem } = ButtonMenu;

const StyledButtonMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const meta: Meta<typeof ButtonMenu> = {
  title: 'Button/ButtonMenu',
  component: ButtonMenu,
  subcomponents: { ButtonMenuItem },
  parameters: {
    docs: {
      description: {
        component:
          "import { ButtonMenu } from '@commerce7/admin-ui'<br/><br/>const { ButtonMenuItem } = ButtonMenu"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ButtonMenu>;

export const Basic: Story = {
  render: () => (
    <ButtonMenu>
      <ButtonMenuItem icon="export" onClick={action('clicked')}>
        Export
      </ButtonMenuItem>
      <ButtonMenuItem icon="trash" onClick={action('clicked')}>
        Delete
      </ButtonMenuItem>
    </ButtonMenu>
  )
};

export const Variants: Story = {
  render: () => (
    <StyledButtonMenuContainer>
      <ButtonMenu>
        <ButtonMenuItem icon="export" onClick={action('clicked')}>
          Export
        </ButtonMenuItem>
      </ButtonMenu>{' '}
      <ButtonMenu variant="primary">
        <ButtonMenuItem icon="export" onClick={action('clicked')}>
          Export
        </ButtonMenuItem>
        <ButtonMenuItem icon="trash" onClick={action('clicked')}>
          Delete
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledButtonMenuContainer>
  )
};

export const Size: Story = {
  render: () => (
    <StyledButtonMenuContainer>
      <ButtonMenu>
        <ButtonMenuItem icon="export" onClick={action('clicked')}>
          Export
        </ButtonMenuItem>
      </ButtonMenu>{' '}
      <ButtonMenu size="small">
        <ButtonMenuItem icon="export" onClick={action('clicked')}>
          Export
        </ButtonMenuItem>
        <ButtonMenuItem icon="trash" onClick={action('clicked')}>
          Delete
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledButtonMenuContainer>
  )
};

export const Disabled: Story = {
  render: () => (
    <ButtonMenu disabled>
      <ButtonMenuItem icon="export" onClick={action('clicked')} disabled>
        Export
      </ButtonMenuItem>
    </ButtonMenu>
  )
};

const ControlledExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledButtonMenuContainer>
      <Button onClick={() => setOpen(!open)}>Toggle menu</Button>
      <ButtonMenu open={open} onOpenChange={setOpen}>
        <ButtonMenuItem icon="export" onClick={action('clicked')}>
          Export
        </ButtonMenuItem>
        <ButtonMenuItem icon="trash" onClick={action('clicked')}>
          Delete
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledButtonMenuContainer>
  );
};

export const Controlled: Story = {
  render: () => <ControlledExample />
};
