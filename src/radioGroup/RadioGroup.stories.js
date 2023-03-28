import { useState } from 'react';

import Radio from '../radio';

import RadioGroup from '.';

export const Basic = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Account Type">
      <Radio
        label="Pro"
        id="pro"
        value="pro"
        checked={checked === 'pro'}
        onChange={handleOnChange}
      />
      <Radio
        label="Basic"
        id="basic"
        value="basic"
        checked={checked === 'basic'}
        onChange={handleOnChange}
      />
    </RadioGroup>
  );
};

Basic.story = {
  name: 'Basic'
};

export const Error = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  const errorMessage = !checked ? 'One selection is required' : '';

  return (
    <RadioGroup label="Account Type" errorMessage={errorMessage}>
      <Radio
        label="Pro"
        id="pro"
        value="pro"
        checked={checked === 'pro'}
        onChange={handleOnChange}
      />
      <Radio
        label="Basic"
        id="basic"
        value="basic"
        checked={checked === 'basic'}
        onChange={handleOnChange}
      />
    </RadioGroup>
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
    <RadioGroup label="Account Type" required>
      <Radio
        label="Pro"
        id="pro"
        value="pro"
        checked={checked === 'pro'}
        onChange={handleOnChange}
      />
      <Radio
        label="Basic"
        id="basic"
        value="basic"
        checked={checked === 'basic'}
        onChange={handleOnChange}
      />
    </RadioGroup>
  );
};

Required.story = {
  name: 'Required'
};

export const RadioButtonGroup = () => {
  const [checked, setChecked] = useState('right');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Logo Alignment" variant="button">
      <Radio
        id="left"
        value="left"
        checked={checked === 'left'}
        onChange={handleOnChange}
        variant="button"
        icon="alignLeft"
      />
      <Radio
        id="center"
        value="center"
        checked={checked === 'center'}
        onChange={handleOnChange}
        variant="button"
        icon="alignCenter"
      />
      <Radio
        id="right"
        value="right"
        checked={checked === 'right'}
        onChange={handleOnChange}
        variant="button"
        icon="alignRight"
      />
    </RadioGroup>
  );
};

RadioButtonGroup.story = {
  name: 'Radio Button Group'
};

export const RadioButtonGroupText = () => {
  const [checked, setChecked] = useState('right');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Logo Alignment" variant="button">
      <Radio
        id="small"
        value="small"
        checked={checked === 'small'}
        onChange={handleOnChange}
        variant="button"
      >
        Small
      </Radio>
      <Radio
        id="center"
        value="center"
        checked={checked === 'center'}
        onChange={handleOnChange}
        variant="button"
      >
        Medium
      </Radio>
      <Radio
        id="right"
        value="right"
        checked={checked === 'right'}
        onChange={handleOnChange}
        variant="button"
      >
        Large
      </Radio>
    </RadioGroup>
  );
};

RadioButtonGroupText.story = {
  name: 'Radio Button Group Text'
};

export const RadioButtonGroupLarge = () => {
  const [checked, setChecked] = useState('right');

  const handleOnChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="" variant="button">
      <Radio
        id="small"
        value="small"
        checked={checked === 'small'}
        onChange={handleOnChange}
        variant="button"
        size="default"
      >
        Card on File
      </Radio>
      <Radio
        id="center"
        value="center"
        checked={checked === 'center'}
        onChange={handleOnChange}
        variant="button"
        size="default"
      >
        Cash
      </Radio>
      <Radio
        id="right"
        value="right"
        checked={checked === 'right'}
        onChange={handleOnChange}
        variant="button"
        size="default"
      >
        Pay Externally
      </Radio>
    </RadioGroup>
  );
};

RadioButtonGroupLarge.story = {
  name: 'Radio Button Group Large'
};

export default {
  title: 'Form/Radio/RadioGroup',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "import { RadioGroup } from '@commerce7/admin-ui'"
      }
    }
  }
};
