import { useState } from 'react';
import Textarea from '.';

export const Basic = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Basic.story = {
  name: 'Basic'
};

export const Disabled = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Disabled.story = {
  name: 'Disabled'
};

export const Placeholder = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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
    <Textarea
      label="Comments"
      id="comments"
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

Required.story = {
  name: 'Required'
};

export const Height = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Height.story = {
  name: 'Custom Height'
};

export const Description = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Description.story = {
  name: 'Description'
};

export default {
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
