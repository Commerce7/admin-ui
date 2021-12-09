import { useState } from 'react';
import Select from '.';

export const Basic = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      label="Favourite Wine"
      id="favourite-wine"
      value={value}
      onChange={handleOnChange}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'White', value: 'white' }
      ]}
    />
  );
};

Basic.story = {
  name: 'Basic'
};

export const Disabled = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      label="Favourite Wine"
      id="favourite-wine"
      value={value}
      onChange={handleOnChange}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'White', value: 'white' }
      ]}
      disabled
    />
  );
};

Disabled.story = {
  name: 'Disabled'
};

export const Placeholder = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      label="Favourite Wine"
      id="favourite-wine"
      value={value}
      onChange={handleOnChange}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'White', value: 'white' }
      ]}
      required
      placeholder="Select your favourite wine"
    />
  );
};

Placeholder.story = {
  name: 'Placeholder'
};

export const Error = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const errorMessage = !value ? 'This field is required' : '';

  return (
    <Select
      label="Favourite Wine"
      id="favourite-wine"
      value={value}
      onChange={handleOnChange}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'White', value: 'white' }
      ]}
      errorMessage={errorMessage}
    />
  );
};

Error.story = {
  name: 'Error'
};

export const Required = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      label="Favourite Wine"
      id="favourite-wine"
      value={value}
      onChange={handleOnChange}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'White', value: 'white' }
      ]}
      required
    />
  );
};

Required.story = {
  name: 'Required'
};

export const Group = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      label="Favourite Drink"
      id="favourite-drink"
      value={value}
      onChange={handleOnChange}
      options={[
        {
          label: 'Wine',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Red', value: 'red' }
          ]
        },
        {
          label: 'Liquor',
          options: [
            { label: 'Rum', value: 'rum' },
            { label: 'Vodka', value: 'vodka' }
          ]
        },
        { label: 'Beer', value: 'beer' }
      ]}
    />
  );
};

Group.story = {
  name: 'Group'
};

export const Description = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      label="Favourite Wine"
      id="favourite-wine"
      value={value}
      onChange={handleOnChange}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'White', value: 'white' }
      ]}
      description="Select your favourite wines from this list"
    />
  );
};

Description.story = {
  name: 'Description'
};

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "import { Select } from '@commerce7/admin-ui'"
      }
    }
  }
};
