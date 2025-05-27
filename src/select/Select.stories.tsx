/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Select from '.';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
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

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic select input with label and options.'
      }
    }
  }
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled select that cannot be interacted with.'
      }
    }
  }
};

export const Placeholder: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with placeholder text shown when no option is selected.'
      }
    }
  }
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with error state and message.'
      }
    }
  }
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Required select showing the required indicator.'
      }
    }
  }
};

export const Group: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with grouped options.'
      }
    }
  }
};

export const Description: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with descriptive helper text.'
      }
    }
  }
};
