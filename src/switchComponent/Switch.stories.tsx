import type { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';

import Switch from '.';

const meta = {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "import { Switch } from '@commerce7/admin-ui'"
      }
    }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    return (
      <Switch
        id="notifications"
        label="Send me notifications"
        checked={checked}
        onChange={handleChange}
      />
    );
  }
};

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    return (
      <Switch
        id="notifications"
        label="Send me notifications"
        checked={checked}
        onChange={handleChange}
        disabled
      />
    );
  }
};

export const Error: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    const errorMessage = !checked ? 'This field is required' : '';

    return (
      <Switch
        id="notifications"
        label="Send me notifications"
        checked={checked}
        onChange={handleChange}
        errorMessage={errorMessage}
      />
    );
  }
};

export const Required: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    return (
      <Switch
        id="notifications"
        label="Send me notifications"
        checked={checked}
        onChange={handleChange}
        required
      />
    );
  }
};

export const Description: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    return (
      <Switch
        id="notifications"
        label="Send me notifications"
        checked={checked}
        onChange={handleChange}
        description="Signup for a monthly notification from our marketing team"
      />
    );
  }
};
