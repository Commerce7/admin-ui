import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

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
type Story = StoryObj<typeof meta>;

// Create separate components for stories with state
const BasicExample = () => {
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
};

const DisabledExample = () => {
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
};

const ErrorExample = () => {
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
};

const RequiredExample = () => {
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
};

const DescriptionExample = () => {
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
};

export const Basic = {
  render: BasicExample
} satisfies Story;

export const Disabled = {
  render: DisabledExample
} satisfies Story;

export const Error = {
  render: ErrorExample
} satisfies Story;

export const Required = {
  render: RequiredExample
} satisfies Story;

export const Description = {
  render: DescriptionExample
} satisfies Story;
