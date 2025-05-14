import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Radio from '../radio';

import RadioGroup from '.';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/Radio/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: "import { RadioGroup } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Create separate components for stories with state
const BasicExample = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Account Type">
      <Radio
        label="Pro"
        id="pro"
        value="pro"
        checked={checked === 'pro'}
        onChange={handleOnChange}
      />
      <Radio
        label="Basic"
        id="basic"
        value="basic"
        checked={checked === 'basic'}
        onChange={handleOnChange}
      />
    </RadioGroup>
  );
};

const ErrorExample = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  const errorMessage = !checked ? 'One selection is required' : '';

  return (
    <RadioGroup label="Account Type" errorMessage={errorMessage}>
      <Radio
        label="Pro"
        id="pro"
        value="pro"
        checked={checked === 'pro'}
        onChange={handleOnChange}
      />
      <Radio
        label="Basic"
        id="basic"
        value="basic"
        checked={checked === 'basic'}
        onChange={handleOnChange}
      />
    </RadioGroup>
  );
};

const RequiredExample = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Account Type" required>
      <Radio
        label="Pro"
        id="pro"
        value="pro"
        checked={checked === 'pro'}
        onChange={handleOnChange}
      />
      <Radio
        label="Basic"
        id="basic"
        value="basic"
        checked={checked === 'basic'}
        onChange={handleOnChange}
      />
    </RadioGroup>
  );
};

const ButtonGroupExample = () => {
  const [checked, setChecked] = useState('right');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Logo Alignment" variant="button" size="small">
      <Radio
        id="left"
        value="left"
        checked={checked === 'left'}
        onChange={handleOnChange}
        variant="button"
        size="small"
        icon="alignLeft"
      />
      <Radio
        id="center"
        value="center"
        checked={checked === 'center'}
        onChange={handleOnChange}
        variant="button"
        size="small"
        icon="alignCenter"
      />
      <Radio
        id="right"
        value="right"
        checked={checked === 'right'}
        onChange={handleOnChange}
        variant="button"
        size="small"
        icon="alignRight"
      />
    </RadioGroup>
  );
};

const ButtonGroupMediumExample = () => {
  const [checked, setChecked] = useState('right');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Text Size" variant="button" size="medium">
      <Radio
        id="small"
        value="small"
        checked={checked === 'small'}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Small
      </Radio>
      <Radio
        id="center"
        value="center"
        checked={checked === 'center'}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Medium
      </Radio>
      <Radio
        id="right"
        value="right"
        checked={checked === 'right'}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Large
      </Radio>
    </RadioGroup>
  );
};

const ButtonGroupLargeExample = () => {
  const [checked, setChecked] = useState('right');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <RadioGroup label="Text Size" variant="button" size="large">
      <Radio
        id="small"
        value="small"
        checked={checked === 'small'}
        onChange={handleOnChange}
        variant="button"
      >
        Small
      </Radio>
      <Radio
        id="center"
        value="center"
        checked={checked === 'center'}
        onChange={handleOnChange}
        variant="button"
      >
        Medium
      </Radio>
      <Radio
        id="right"
        value="right"
        checked={checked === 'right'}
        onChange={handleOnChange}
        variant="button"
      >
        Large
      </Radio>
    </RadioGroup>
  );
};

export const Basic: Story = {
  render: () => <BasicExample />
};

export const Error: Story = {
  render: () => <ErrorExample />
};

export const Required: Story = {
  render: () => <RequiredExample />
};

export const ButtonGroup: Story = {
  render: () => <ButtonGroupExample />
};

export const ButtonGroupMedium: Story = {
  render: () => <ButtonGroupMediumExample />
};

export const ButtonGroupLarge: Story = {
  render: () => <ButtonGroupLargeExample />
};

export const ButtonGroupError: Story = {
  render: () => <ButtonGroupMediumExample />
};

export const ButtonGroupLargeError: Story = {
  render: () => <ButtonGroupLargeExample />
};
