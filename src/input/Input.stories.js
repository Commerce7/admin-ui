import { useState } from 'react';
import Input from '.';

export const Basic = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Basic.story = {
  name: 'Basic'
};

export const Disabled = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Disabled.story = {
  name: 'Disabled'
};

export const Placeholder = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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
    <Input
      label="First Name"
      id="first-name"
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
    <Input
      label="First Name"
      id="first-name"
      value={value}
      onChange={handleOnChange}
      required
    />
  );
};

Required.story = {
  name: 'Required'
};

export const Passsword = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Passsword.story = {
  name: 'Passsword'
};

export const Email = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Email.story = {
  name: 'Email'
};

export const Icon = () => {
  const [tax, setTax] = useState('');
  const [price, setPrice] = useState('');

  const handleTaxChange = (e) => {
    setTax(e.target.value);
  };

  const handlePriceChange = (e) => {
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

Icon.story = {
  name: 'Icon'
};

export const Description = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
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

Description.story = {
  name: 'Description'
};

export const Color = () => {
  const [value, setValue] = useState('#bf0000');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      type="color"
      label="Color"
      id="color"
      value={value}
      onChange={handleOnChange}
    />
  );
};

Color.story = {
  name: 'Color'
};

export default {
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
