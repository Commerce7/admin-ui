import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Tag from '.';

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: "import { Tag } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  render: () => (
    <>
      <Tag variant="default">Default</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="success">Success</Tag>
    </>
  )
};

export const Click: Story = {
  render: () => (
    <>
      <Tag variant="default" onClick={action('click')}>
        Default
      </Tag>
      <Tag variant="info" onClick={action('click')}>
        Info
      </Tag>
      <Tag variant="warning" onClick={action('click')}>
        Warning
      </Tag>
      <Tag variant="error" onClick={action('click')}>
        Error
      </Tag>
      <Tag variant="success" onClick={action('click')}>
        Success
      </Tag>
    </>
  )
};

export const Icon: Story = {
  render: () => (
    <>
      <h5>Start Icon</h5>
      <div>
        <Tag variant="default" startIcon="closeCircle" size={12}>
          Default
        </Tag>
        <Tag variant="info" startIcon="infoCircle" size={12}>
          Info
        </Tag>
        <Tag variant="warning" startIcon="warning" size={12}>
          Warning
        </Tag>
        <Tag variant="error" startIcon="warning" size={12}>
          Error
        </Tag>
        <Tag variant="success" startIcon="closeCircle" size={12}>
          Success
        </Tag>
      </div>
      <h5>End Icon</h5>
      <div>
        <Tag variant="default" endIcon="closeCircle" size={12}>
          Default
        </Tag>
        <Tag variant="info" endIcon="infoCircle" size={12}>
          Info
        </Tag>
        <Tag variant="warning" endIcon="warning" size={12}>
          Warning
        </Tag>
        <Tag variant="error" endIcon="warning" size={12}>
          Error
        </Tag>
        <Tag variant="success" endIcon="closeCircle" size={12}>
          Success
        </Tag>
      </div>
    </>
  )
};

export const Delete: Story = {
  render: () => (
    <>
      <Tag variant="default" onDelete={action('delete click')}>
        Default
      </Tag>
      <Tag variant="info" onDelete={action('delete click')}>
        Info
      </Tag>
      <Tag variant="warning" onDelete={action('delete click')}>
        Warning
      </Tag>
      <Tag variant="error" onDelete={action('delete click')}>
        Error
      </Tag>
      <Tag variant="success" onDelete={action('delete click')}>
        Success
      </Tag>
    </>
  )
};
