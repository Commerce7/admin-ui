import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Radio from '../radio';

import RadioGroup from '.';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/Radio/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
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

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const Error: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const Required: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const ButtonGroup: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const ButtonGroupMedium: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const ButtonGroupLarge: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }
};

export const ButtonGroupError: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState('right');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.value);
    };

    return (
      <RadioGroup
        label="Text Size"
        variant="button"
        size="medium"
        errorMessage="Please select an option"
      >
        <Radio
          id="small-error"
          value="small"
          checked={checked === 'small'}
          onChange={handleOnChange}
          variant="button"
          size="medium"
        >
          Small
        </Radio>
        <Radio
          id="center-error"
          value="center"
          checked={checked === 'center'}
          onChange={handleOnChange}
          variant="button"
          size="medium"
        >
          Medium
        </Radio>
        <Radio
          id="right-error"
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
  }
};

export const ButtonGroupLargeError: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState('right');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.value);
    };

    return (
      <RadioGroup
        label="Text Size"
        variant="button"
        size="large"
        errorMessage="Please select an option"
      >
        <Radio
          id="small-large-error"
          value="small"
          checked={checked === 'small'}
          onChange={handleOnChange}
          variant="button"
        >
          Small
        </Radio>
        <Radio
          id="center-large-error"
          value="center"
          checked={checked === 'center'}
          onChange={handleOnChange}
          variant="button"
        >
          Medium
        </Radio>
        <Radio
          id="right-large-error"
          value="right"
          checked={checked === 'right'}
          onChange={handleOnChange}
          variant="button"
        >
          Large
        </Radio>
      </RadioGroup>
    );
  }
};
