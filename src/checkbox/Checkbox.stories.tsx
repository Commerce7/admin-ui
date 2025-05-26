import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
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

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Subscribe"
        id="subscribe"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  }
};

export const Disabled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const Error: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const Required: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const Description: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const ButtonVariant: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked1, setChecked1] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
          id="agree"
          checked={checked2}
          onChange={() => setChecked2(!checked2)}
          variant="button"
          size="small"
          icon="clipboardText"
          errorMessage="Required."
        />
      </>
    );
  }
};

export const MediumButtonVariant: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked1, setChecked1] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const LargeButtonVariant: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked1, setChecked1] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};
