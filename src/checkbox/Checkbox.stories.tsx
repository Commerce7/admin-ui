import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "import { Checkbox } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Create separate components for stories with state
const BasicExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

const DisabledExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={() => setChecked(!checked)}
      disabled
    />
  );
};

const ErrorExample = () => {
  const [checked, setChecked] = useState(false);
  const errorMessage = !checked ? 'This field is required' : '';
  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={() => setChecked(!checked)}
      errorMessage={errorMessage}
    />
  );
};

const RequiredExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={() => setChecked(!checked)}
      required
    />
  );
};

const DescriptionExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Subscribe"
      id="subscribe"
      checked={checked}
      onChange={() => setChecked(!checked)}
      required
      description="We will never spam your email address"
    />
  );
};

const ButtonVariantExample = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <Checkbox
        label="Subscribe"
        id="subscribe"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
        variant="button"
        size="small"
        icon="carrot"
        description="Subscription can be cancelled at any time."
      />
      <Checkbox
        label="I agree"
        id="subscribe"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
        variant="button"
        size="small"
        icon="clipboardText"
        errorMessage="Required."
      />
    </>
  );
};

const MediumButtonVariantExample = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <Checkbox
        id="subscribe"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
        variant="button"
        size="medium"
        description="Subscription can be cancelled at any time."
      >
        Subscribe
      </Checkbox>
      <Checkbox
        id="agree"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
        variant="button"
        size="medium"
        errorMessage="Required."
      >
        I agree
      </Checkbox>
    </>
  );
};

const LargeButtonVariantExample = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <Checkbox
        id="subscribe"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
        variant="button"
        description="Subscription can be cancelled at any time."
      >
        Subscribe
      </Checkbox>
      <Checkbox
        id="agree"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
        variant="button"
        errorMessage="Required."
      >
        I agree
      </Checkbox>
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
