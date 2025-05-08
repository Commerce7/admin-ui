import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Select from '.';

const meta: Meta<typeof Select> = {
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

export default meta;
type Story = StoryObj<typeof Select>;

// Create separate components for stories with state
const BasicExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

const DisabledExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

const PlaceholderExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

const ErrorExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

const RequiredExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

const GroupExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

const DescriptionExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

export const Basic: Story = {
  render: () => <BasicExample />
};

export const Disabled: Story = {
  render: () => <DisabledExample />
};

export const Placeholder: Story = {
  render: () => <PlaceholderExample />
};

export const Error: Story = {
  render: () => <ErrorExample />
};

export const Required: Story = {
  render: () => <RequiredExample />
};

export const Group: Story = {
  render: () => <GroupExample />
};

export const Description: Story = {
  render: () => <DescriptionExample />
};
