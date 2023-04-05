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

export const ButtonVariant = () => {
  const [selected, setSelected] = useState(false);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Radio
        id="wine"
        value="wine"
        checked={selected === 'wine'}
        onChange={handleSelect}
        variant="button"
        size="small"
        icon="wine"
      />
      <Radio
        id="bag"
        value="bag"
        label="Buy this Wine"
        description="This is the description"
        checked={selected === 'bag'}
        onChange={handleSelect}
        variant="button"
        size="small"
        icon="bag"
      />
      <Radio
        id="application"
        value="application"
        label="Error Wine Radio"
        checked={selected === 'application'}
        onChange={handleSelect}
        variant="button"
        size="small"
        icon="application"
        errorMessage="Required."
      />
    </>
  );
};

ButtonVariant.story = {
  name: 'Button Variant'
};

export const MediumButtonVariant = () => {
  const [selected, setSelected] = useState(false);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Radio
        id="wine"
        value="wine"
        checked={selected === 'wine'}
        onChange={handleSelect}
        variant="button"
        size="medium"
      >
        Wine
      </Radio>
      <Radio
        id="bag"
        value="bag"
        description="This is the description"
        checked={selected === 'bag'}
        onChange={handleSelect}
        variant="button"
        size="medium"
      >
        Bag
      </Radio>
      <Radio
        id="application"
        value="application"
        checked={selected === 'application'}
        onChange={handleSelect}
        variant="button"
        size="medium"
        errorMessage="Required."
      >
        Application
      </Radio>
    </>
  );
};

MediumButtonVariant.story = {
  name: 'Medium Button Variant'
};

export const LargeButtonVariant = () => {
  const [selected, setSelected] = useState(false);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Radio
        id="wine"
        value="wine"
        checked={selected === 'wine'}
        onChange={handleSelect}
        variant="button"
      >
        Wine
      </Radio>
      <Radio
        id="bag"
        value="bag"
        description="This is the description"
        checked={selected === 'bag'}
        onChange={handleSelect}
        variant="button"
      >
        Bag
      </Radio>
      <Radio
        id="application"
        value="application"
        checked={selected === 'application'}
        onChange={handleSelect}
        variant="button"
        errorMessage="Required."
      >
        Application
      </Radio>
    </>
  );
};

LargeButtonVariant.story = {
  name: 'Large Button Variant'
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
