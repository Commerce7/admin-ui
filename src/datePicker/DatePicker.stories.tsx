import type { Meta, StoryObj } from '@storybook/react';
import { Moment } from 'moment';
import React, { useState } from 'react';

import DatePicker from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: "import { DatePicker } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Create separate components for stories with state
const BasicExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment) => {
    setValue(e.format('MMM D, YYYY'));
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
    />
  );
};

const DisabledExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment) => {
    setValue(e.format('MMM D, YYYY'));
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      disabled
    />
  );
};

const PlaceholderExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment) => {
    setValue(e.format('MMM D, YYYY'));
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      placeholder="Select the date"
    />
  );
};

const ErrorExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment) => {
    setValue(e.format('MMM D, YYYY'));
  };

  const errorMessage = !value ? 'This field is required' : '';

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      errorMessage={errorMessage}
    />
  );
};

const RequiredExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment) => {
    setValue(e.format('MMM D, YYYY'));
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      required
    />
  );
};

const DisabledDatesExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment) => {
    setValue(e.format('MMM D, YYYY'));
  };

  const isValidDate = (currentDate: Moment) => {
    const today = new Date();
    return !currentDate.isBefore(today, 'day');
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      isValidDate={isValidDate}
    />
  );
};

const DescriptionExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment) => {
    setValue(e.format('MMM D, YYYY'));
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      description="Select the date to start your campaign"
    />
  );
};

const ClearExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment | string) => {
    setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      allowClear
    />
  );
};

const InlineExample = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: Moment | string) => {
    setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
  };

  return (
    <DatePicker
      label="Date"
      id="date"
      value={value}
      onChange={handleOnChange}
      inline
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

export const DisabledDates: Story = {
  render: () => <DisabledDatesExample />
};

export const Description: Story = {
  render: () => <DescriptionExample />
};

export const Clear: Story = {
  render: () => <ClearExample />
};

export const Inline: Story = {
  render: () => <InlineExample />
};
