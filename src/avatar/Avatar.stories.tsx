import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "import { Avatar } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  name: 'Basic',
  render: () => <Avatar label="JH" />
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <>
      <Avatar
        imageSrc="https://randomuser.me/api/portraits/women/1.jpg"
        imageAlt="Woman Profile"
        size="tiny"
        label="JH"
      />
      <Avatar
        imageSrc="https://randomuser.me/api/portraits/women/3.jpg"
        imageAlt="Woman Profile"
        size="small"
        label="JH"
      />
      <Avatar
        imageSrc="https://randomuser.me/api/portraits/men/4.jpg"
        imageAlt="Man Profile"
        size="default"
        label="JH"
      />
      <Avatar
        imageSrc="https://randomuser.me/api/portraits/women/2.jpg"
        imageAlt="Woman Profile"
        size="large"
        label="JH"
      />
    </>
  )
};

export const Image: Story = {
  name: 'Image',
  render: () => (
    <Avatar
      imageSrc="https://randomuser.me/api/portraits/women/6.jpg"
      imageAlt="Woman Profile"
      label="JH"
    />
  )
};
