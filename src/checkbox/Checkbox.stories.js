import { useState } from 'react';

import Checkbox from '.';

export const Basic = () => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={handleOnChange}
    />
  );
};

Basic.story = {
  name: 'Basic'
};

export const Disabled = () => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={handleOnChange}
      disabled
    />
  );
};

Disabled.story = {
  name: 'Disabled'
};

export const Error = () => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  const errorMessage = !checked ? 'This field is required' : '';

  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={handleOnChange}
      errorMessage={errorMessage}
    />
  );
};

Error.story = {
  name: 'Error'
};

export const Required = () => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={handleOnChange}
      required
    />
  );
};

Required.story = {
  name: 'Required'
};

export const Description = () => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={handleOnChange}
      required
      description="We will never spam your email address"
    />
  );
};

Description.story = {
  name: 'Description'
};

export default {
  title: 'Form/Checkbox/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "import { Checkbox } from '@commerce7/admin-ui'"
      }
    }
  }
};
