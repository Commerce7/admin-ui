import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Textarea from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { Textarea } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <Textarea
        label="Comments"
        id="comments"
        value={value}
        onChange={handleOnChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic textarea with label and onChange handler.'
      }
    }
  }
};

export const Disabled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <Textarea
        label="Comments"
        id="comments"
        value={value}
        onChange={handleOnChange}
        disabled
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled textarea that cannot be interacted with.'
      }
    }
  }
};

export const Placeholder: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <Textarea
        label="Comments"
        id="comments"
        value={value}
        onChange={handleOnChange}
        placeholder="Comments"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with placeholder text shown when empty.'
      }
    }
  }
};

export const Error: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    const errorMessage = !value ? 'This field is required' : '';

    return (
      <Textarea
        label="Comments"
        id="comments"
        value={value}
        onChange={handleOnChange}
        errorMessage={errorMessage}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with error state and message.'
      }
    }
  }
};

export const Required: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <Textarea
        label="Comments"
        id="comments"
        value={value}
        onChange={handleOnChange}
        required
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Required textarea showing the required indicator.'
      }
    }
  }
};

export const CustomHeight: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <Textarea
        label="Comments"
        id="comments"
        value={value}
        height={600}
        onChange={handleOnChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with custom height.'
      }
    }
  }
};

export const Description: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <Textarea
        label="Comments"
        id="comments"
        value={value}
        onChange={handleOnChange}
        description="Please give us some more information"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with descriptive helper text.'
      }
    }
  }
};
