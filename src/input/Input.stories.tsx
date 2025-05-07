import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "import { Input } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

// Create separate components for stories with state
const BasicExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="First Name"
      id="first-name"
      value={value}
      onChange={handleOnChange}
    />
  );
};

const DisabledExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="First Name"
      id="first-name"
      value={value}
      onChange={handleOnChange}
      disabled
    />
  );
};

const PlaceholderExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="First Name"
      id="first-name"
      value={value}
      onChange={handleOnChange}
      placeholder="First Name"
    />
  );
};

const ErrorExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const errorMessage = !value ? 'This field is required' : '';

  return (
    <Input
      label="First Name"
      id="first-name"
      value={value}
      onChange={handleOnChange}
      errorMessage={errorMessage}
    />
  );
};

const RequiredExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="First Name"
      id="first-name"
      value={value}
      onChange={handleOnChange}
      required
    />
  );
};

const PasswordExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="Password"
      id="password"
      value={value}
      onChange={handleOnChange}
      type="password"
    />
  );
};

const EmailExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="Email"
      id="email"
      value={value}
      onChange={handleOnChange}
      type="email"
    />
  );
};

const IconExample = () => {
  const [tax, setTax] = useState('');
  const [price, setPrice] = useState('');

  const handleTaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTax(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <Input
        label="Price"
        id="price"
        value={price}
        onChange={handlePriceChange}
        startIcon="dollar"
      />
      <Input
        label="Tax"
        id="tax"
        value={tax}
        onChange={handleTaxChange}
        endIcon="percent"
      />
    </>
  );
};

const DescriptionExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="Email"
      id="email"
      value={value}
      onChange={handleOnChange}
      description="Fill in your email to keep up with the latest updates"
    />
  );
};

const ColorExample = () => {
  const [value, setValue] = useState('#bf0000');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      type="color"
      label="Color"
      id="color"
      value={value}
      onChange={handleOnChange}
      description="this is the description"
    />
  );
};

const SuffixExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      label="First Name"
      id="first-name"
      value={value}
      onChange={handleOnChange}
      suffix="hours"
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

export const Password: Story = {
  render: () => <PasswordExample />
};

export const Email: Story = {
  render: () => <EmailExample />
};

export const Icon: Story = {
  render: () => <IconExample />
};

export const Description: Story = {
  render: () => <DescriptionExample />
};

export const Color: Story = {
  render: () => <ColorExample />
};

export const Suffix: Story = {
  render: () => <SuffixExample />
};
