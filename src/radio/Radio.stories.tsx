import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Radio from '.';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio/Radio',
  component: Radio,
  tags: ['autodocs'],
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

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic radio button with label and onChange handler.'
      }
    }
  }
};

export const Disabled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled radio button that cannot be interacted with.'
      }
    }
  }
};

export const Error: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button displaying an error state with error message.'
      }
    }
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
      <Radio
        label="Pro"
        id="pro"
        value="pro"
        checked={checked === 'pro'}
        onChange={handleOnChange}
        required
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Required radio button showing the required indicator.'
      }
    }
  }
};

export const Description: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button with a description text.'
      }
    }
  }
};

export const ButtonVariant: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with button variant and small size.'
      }
    }
  }
};

export const MediumButtonVariant: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with button variant and medium size.'
      }
    }
  }
};

export const LargeButtonVariant: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with button variant and default (large) size.'
      }
    }
  }
};
