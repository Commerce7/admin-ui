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

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const Error: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};
