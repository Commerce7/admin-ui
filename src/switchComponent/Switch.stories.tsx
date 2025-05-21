import type { Meta } from '@storybook/react';
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
};

export const Disabled = {
  render: DisabledExample
};

export const Error = {
  render: ErrorExample
};

export const Required = {
  render: RequiredExample
};

export const Description = {
  render: DescriptionExample
};
