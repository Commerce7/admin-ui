import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { Input } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="First Name"
        id="first-name"
        value={value}
        onChange={handleOnChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic input field with label and onChange handler.'
      }
    }
  }
};

export const Disabled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="First Name"
        id="first-name"
        value={value}
        onChange={handleOnChange}
        disabled
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input that cannot be interacted with.'
      }
    }
  }
};

export const Placeholder: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="First Name"
        id="first-name"
        value={value}
        onChange={handleOnChange}
        placeholder="First Name"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with placeholder text shown when empty.'
      }
    }
  }
};

export const Error: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const errorMessage = !value ? 'This field is required' : '';

    return (
      <Input
        label="First Name"
        id="first-name"
        value={value}
        onChange={handleOnChange}
        errorMessage={errorMessage}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with error state and message.'
      }
    }
  }
};

export const Required: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="First Name"
        id="first-name"
        value={value}
        onChange={handleOnChange}
        required
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Required input showing an indicator in the label.'
      }
    }
  }
};

export const Password: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="Password"
        id="password"
        value={value}
        onChange={handleOnChange}
        type="password"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input that masks entered text.'
      }
    }
  }
};

export const Email: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="Email"
        id="email"
        value={value}
        onChange={handleOnChange}
        type="email"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Email input with appropriate keyboard on mobile devices.'
      }
    }
  }
};

export const Icon: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tax, setTax] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [price, setPrice] = useState('');

    const handleTaxChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTax(e.target.value);
    };

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPrice(e.target.value);
    };

    return (
      <>
        <Input
          label="Price"
          id="price"
          value={price}
          onChange={handlePriceChange}
          startIcon="dollar"
        />
        <Input
          label="Tax"
          id="tax"
          value={tax}
          onChange={handleTaxChange}
          endIcon="percent"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with icons positioned at the start or end.'
      }
    }
  }
};

export const Description: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="Email"
        id="email"
        value={value}
        onChange={handleOnChange}
        description="Fill in your email to keep up with the latest updates"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with helpful description text below.'
      }
    }
  }
};

export const Color: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('#bf0000');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        type="color"
        label="Color"
        id="color"
        value={value}
        onChange={handleOnChange}
        description="this is the description"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Color input type with color picker.'
      }
    }
  }
};

export const Suffix: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="First Name"
        id="first-name"
        value={value}
        onChange={handleOnChange}
        suffix="hours"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with text suffix.'
      }
    }
  }
};
