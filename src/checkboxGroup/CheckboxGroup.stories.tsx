import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Checkbox from '../checkbox';

import CheckboxGroup from '.';

const meta: Meta<typeof CheckboxGroup> = {
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

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

// Create separate components for stories with state
const BasicExample = () => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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

const ErrorExample = () => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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

// Similar pattern for other examples...

export const Basic: Story = {
  render: () => <BasicExample />
};

export const Error: Story = {
  render: () => <ErrorExample />
};

// Additional stories following the same pattern...
