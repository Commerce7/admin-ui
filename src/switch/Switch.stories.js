import { useState } from 'react';
import Switch from '.';

export const Basic = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      id="notifications"
      label="Send me notifications"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

Basic.story = {
  name: 'Basic'
};

export const Disabled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      id="notifications"
      label="Send me notifications"
      checked={checked}
      disabled
      onChange={() => setChecked(!checked)}
    />
  );
};

Disabled.story = {
  name: 'Disabled'
};

export const Error = () => {
  const [checked, setChecked] = useState(false);

  const errorMessage = !checked ? 'This field is required' : '';

  return (
    <Switch
      id="notifications"
      label="Send me notifications"
      checked={checked}
      onChange={() => setChecked(!checked)}
      errorMessage={errorMessage}
    />
  );
};

Error.story = {
  name: 'Error'
};

export const Required = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      id="notifications"
      label="Send me notifications"
      checked={checked}
      onChange={() => setChecked(!checked)}
      required
    />
  );
};

Required.story = {
  name: 'Required'
};

export const Description = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      id="notifications"
      label="Send me notifications"
      checked={checked}
      onChange={() => setChecked(!checked)}
      description="Signup for a monthly notification from our marketing team"
    />
  );
};

Description.story = {
  name: 'Description'
};

export default {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "import { Switch } from '@commerce7/admin-ui'"
      }
    }
  }
};
