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

export const ButtonVariant = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleOnChange1 = () => {
    setChecked1(!checked1);
  };

  const handleOnChange2 = () => {
    setChecked2(!checked2);
  };

  return (
    <>
      <Checkbox
        label="Subscribe"
        id="subscribe"
        checked={checked1}
        onChange={handleOnChange1}
        variant="button"
        size="small"
        icon="carrot"
        description="Subscription can be cancelled at any time."
      />
      <Checkbox
        label="I agree"
        id="subscribe"
        checked={checked2}
        onChange={handleOnChange2}
        variant="button"
        size="small"
        icon="clipboardText"
        errorMessage="Required."
      />
    </>
  );
};

ButtonVariant.story = {
  name: 'Button Variant'
};

export const MediumButtonVariant = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleOnChange1 = () => {
    setChecked1(!checked1);
  };

  const handleOnChange2 = () => {
    setChecked2(!checked2);
  };

  return (
    <>
      <Checkbox
        id="subscribe"
        checked={checked1}
        onChange={handleOnChange1}
        variant="button"
        size="medium"
        description="Subscription can be cancelled at any time."
      >
        Subscribe
      </Checkbox>
      <Checkbox
        id="agree"
        checked={checked2}
        onChange={handleOnChange2}
        variant="button"
        size="medium"
        errorMessage="Required."
      >
        I agree
      </Checkbox>
    </>
  );
};

MediumButtonVariant.story = {
  name: 'Medium Button Variant'
};

export const LargeButtonVariant = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleOnChange1 = () => {
    setChecked1(!checked1);
  };

  const handleOnChange2 = () => {
    setChecked2(!checked2);
  };

  return (
    <>
      <Checkbox
        id="subscribe"
        checked={checked1}
        onChange={handleOnChange1}
        variant="button"
        description="Subscription can be cancelled at any time."
      >
        Subscribe
      </Checkbox>
      <Checkbox
        id="agree"
        checked={checked2}
        onChange={handleOnChange2}
        variant="button"
        errorMessage="Required."
      >
        I agree
      </Checkbox>
    </>
  );
};

LargeButtonVariant.story = {
  name: 'Large Button Variant'
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
