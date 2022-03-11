import { useState } from 'react';

import Checkbox from '../checkbox';

import CheckboxGroup from '.';

export const Basic = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup label="Select all available wines">
      <Checkbox
        label="Red"
        id="red"
        value="red"
        checked={checked.includes('red')}
        onChange={handleOnChange}
      />
      <Checkbox
        label="White"
        id="white"
        value="white"
        checked={checked.includes('white')}
        onChange={handleOnChange}
      />
    </CheckboxGroup>
  );
};

Basic.story = {
  name: 'Basic'
};

export const Error = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  const errorMessage = !checked.length ? 'One selection is required' : '';

  return (
    <CheckboxGroup
      label="Select all available wines"
      errorMessage={errorMessage}
    >
      <Checkbox
        label="Red"
        id="red"
        value="red"
        checked={checked.includes('red')}
        onChange={handleOnChange}
      />
      <Checkbox
        label="White"
        id="white"
        value="white"
        checked={checked.includes('white')}
        onChange={handleOnChange}
      />
    </CheckboxGroup>
  );
};

Error.story = {
  name: 'Error'
};

export const Required = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup label="Select all available wines" required>
      <Checkbox
        label="Red"
        id="red"
        value="red"
        checked={checked.includes('red')}
        onChange={handleOnChange}
      />
      <Checkbox
        label="White"
        id="white"
        value="white"
        checked={checked.includes('white')}
        onChange={handleOnChange}
      />
    </CheckboxGroup>
  );
};

Required.story = {
  name: 'Required'
};

export default {
  title: 'Form/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: "import { CheckboxGroup } from '@commerce7/admin-ui'"
      }
    }
  }
};
