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

export const CheckboxButtonGroup = () => {
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
    <CheckboxGroup label="Heading Styles" variant="button">
      <Checkbox
        id="bold"
        value="bold"
        checked={checked.includes('bold')}
        onChange={handleOnChange}
        variant="button"
        icon="textBold"
      />
      <Checkbox
        id="italic"
        value="italic"
        checked={checked.includes('italic')}
        onChange={handleOnChange}
        variant="button"
        icon="textItalic"
      />
    </CheckboxGroup>
  );
};

CheckboxButtonGroup.story = {
  name: 'Checkbox Button Group'
};
export const CheckboxButtonGroupText = () => {
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
    <CheckboxGroup label="Heading Styles" variant="button">
      <Checkbox
        id="cheese"
        value="cheese"
        checked={checked.includes('cheese')}
        onChange={handleOnChange}
        variant="button"
      >
        Cheese
      </Checkbox>
      <Checkbox
        id="pickles"
        value="pickles"
        checked={checked.includes('pickles')}
        onChange={handleOnChange}
        variant="button"
      >
        Pickles
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxButtonGroupText.story = {
  name: 'Checkbox Button Group Text'
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
