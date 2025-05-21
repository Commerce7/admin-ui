import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Textarea from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: "import { Textarea } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

const BasicExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      label="Comments"
      id="comments"
      value={value}
      onChange={handleOnChange}
    />
  );
};

const DisabledExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      label="Comments"
      id="comments"
      value={value}
      onChange={handleOnChange}
      disabled
    />
  );
};

const PlaceholderExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      label="Comments"
      id="comments"
      value={value}
      onChange={handleOnChange}
      placeholder="Comments"
    />
  );
};

const ErrorExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const errorMessage = !value ? 'This field is required' : '';

  return (
    <Textarea
      label="Comments"
      id="comments"
      value={value}
      onChange={handleOnChange}
      errorMessage={errorMessage}
    />
  );
};

const RequiredExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      label="Comments"
      id="comments"
      value={value}
      onChange={handleOnChange}
      required
    />
  );
};

const HeightExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      label="Comments"
      id="comments"
      value={value}
      height={600}
      onChange={handleOnChange}
    />
  );
};

const DescriptionExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      label="Comments"
      id="comments"
      value={value}
      onChange={handleOnChange}
      description="Please give us some more information"
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

export const CustomHeight: Story = {
  render: () => <HeightExample />
};

export const Description: Story = {
  render: () => <DescriptionExample />
};
