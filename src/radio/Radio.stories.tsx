import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Radio from '.';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "import { Radio } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

// Create separate components for stories with state
const BasicExample = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
      onChange={handleOnChange}
    />
  );
};

const DisabledExample = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
      onChange={handleOnChange}
      disabled
    />
  );
};

const ErrorExample = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  const errorMessage = checked !== 'pro' ? 'This field is required' : '';

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
      onChange={handleOnChange}
      errorMessage={errorMessage}
    />
  );
};

const RequiredExample = () => {
  const [checked, setChecked] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <Radio
      label="Pro"
      id="pro"
      value="pro"
      checked={checked === 'pro'}
      onChange={handleOnChange}
      required
    />
  );
};

const DescriptionExample = () => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  return (
    <Radio
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={handleOnChange}
      value=""
      required
      description="We will never spam your email address"
    />
  );
};

const ButtonVariantExample = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Radio
        id="wine"
        value="wine"
        checked={selected === 'wine'}
        onChange={handleSelect}
        variant="button"
        size="small"
        icon="wine"
      />
      <Radio
        id="bag"
        value="bag"
        label="Buy this Wine"
        description="This is the description"
        checked={selected === 'bag'}
        onChange={handleSelect}
        variant="button"
        size="small"
        icon="bag"
      />
      <Radio
        id="application"
        value="application"
        label="Error Wine Radio"
        checked={selected === 'application'}
        onChange={handleSelect}
        variant="button"
        size="small"
        icon="application"
        errorMessage="Required."
      />
    </>
  );
};

const MediumButtonVariantExample = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Radio
        id="wine"
        value="wine"
        checked={selected === 'wine'}
        onChange={handleSelect}
        variant="button"
        size="medium"
      >
        Wine
      </Radio>
      <Radio
        id="bag"
        value="bag"
        description="This is the description"
        checked={selected === 'bag'}
        onChange={handleSelect}
        variant="button"
        size="medium"
      >
        Bag
      </Radio>
      <Radio
        id="application"
        value="application"
        checked={selected === 'application'}
        onChange={handleSelect}
        variant="button"
        size="medium"
        errorMessage="Required."
      >
        Application
      </Radio>
    </>
  );
};

const LargeButtonVariantExample = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Radio
        id="wine"
        value="wine"
        checked={selected === 'wine'}
        onChange={handleSelect}
        variant="button"
      >
        Wine
      </Radio>
      <Radio
        id="bag"
        value="bag"
        description="This is the description"
        checked={selected === 'bag'}
        onChange={handleSelect}
        variant="button"
      >
        Bag
      </Radio>
      <Radio
        id="application"
        value="application"
        checked={selected === 'application'}
        onChange={handleSelect}
        variant="button"
        errorMessage="Required."
      >
        Application
      </Radio>
    </>
  );
};

export const Basic: Story = {
  render: () => <BasicExample />
};

export const Disabled: Story = {
  render: () => <DisabledExample />
};

export const Error: Story = {
  render: () => <ErrorExample />
};

export const Required: Story = {
  render: () => <RequiredExample />
};

export const Description: Story = {
  render: () => <DescriptionExample />
};

export const ButtonVariant: Story = {
  render: () => <ButtonVariantExample />
};

export const MediumButtonVariant: Story = {
  render: () => <MediumButtonVariantExample />
};

export const LargeButtonVariant: Story = {
  render: () => <LargeButtonVariantExample />
};
