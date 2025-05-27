/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { Moment } from 'moment';
import React, { useState } from 'react';

import DatePicker from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { DatePicker } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic date picker with label and onChange handler.'
      }
    }
  }
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        disabled
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled date picker that cannot be interacted with.'
      }
    }
  }
};

export const Placeholder: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        placeholder="Select the date"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with custom placeholder text.'
      }
    }
  }
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    const errorMessage = !value ? 'This field is required' : '';

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        errorMessage={errorMessage}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker displaying an error message when validation fails.'
      }
    }
  }
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        required
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Required date picker showing the required indicator.'
      }
    }
  }
};

export const DisabledDates: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    const isValidDate = (currentDate: Moment) => {
      const today = new Date();
      return !currentDate.isBefore(today, 'day');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        isValidDate={isValidDate}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Date picker with custom validation to disable dates before today.'
      }
    }
  }
};

export const Description: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        description="Select the date to start your campaign"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with a description helper text.'
      }
    }
  }
};

export const Clear: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        allowClear
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with a clear button to reset the input.'
      }
    }
  }
};

export const Inline: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: Moment | string) => {
      setValue(e ? (e as Moment).format('MMM D, YYYY') : '');
    };

    return (
      <DatePicker
        label="Date"
        id="date"
        value={value}
        onChange={handleOnChange}
        inline
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Inline date picker that always displays the calendar.'
      }
    }
  }
};
