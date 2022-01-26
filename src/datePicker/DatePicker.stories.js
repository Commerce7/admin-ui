import { useState } from 'react';
import DatePicker from '.';

export const Basic = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Basic.story = {
  name: 'Basic'
};

export const Disabled = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Disabled.story = {
  name: 'Disabled'
};

export const Placeholder = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Placeholder.story = {
  name: 'Placeholder'
};

export const Error = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Error.story = {
  name: 'Error'
};

export const Required = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Required.story = {
  name: 'Required'
};

export const DisabledDates = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.format('MMM D, YYYY'));
  };

  const isValidDate = (currentDate) => {
    const today = new Date();

    if (currentDate.isBefore(today, 'day')) {
      return false;
    }

    return true;
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

DisabledDates.story = {
  name: 'Disabled Dates'
};

export const Description = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Description.story = {
  name: 'Description'
};

export const Clear = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e ? e.format('MMM D, YYYY') : '');
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

Clear.story = {
  name: 'Clear Value'
};

export const Inline = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e ? e.format('MMM D, YYYY') : '');
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

Inline.story = {
  name: 'Inline'
};

export default {
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
