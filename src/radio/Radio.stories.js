import { useState } from 'react';

import Radio from '.';

export const Basic = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
      onChange={handleOnChange}
    />
  );
};

Basic.story = {
  name: 'Basic'
};

export const Disabled = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
      onChange={handleOnChange}
      disabled
    />
  );
};

Disabled.story = {
  name: 'Disabled'
};

export const Error = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  const errorMessage = checked !== 'pro' ? 'This field is required' : '';

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
      onChange={handleOnChange}
      errorMessage={errorMessage}
    />
  );
};

Error.story = {
  name: 'Error'
};

export const Required = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
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
    <Radio
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
  title: 'Form/Radio/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "import { Radio } from '@commerce7/admin-ui'"
      }
    }
  }
};
