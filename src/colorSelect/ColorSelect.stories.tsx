import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { c7Colors } from '../ui/theme';

import ColorSelect, { ColorSelectOption } from '.';

const options: ColorSelectOption[] = [
  { value: 'purple', color: c7Colors.purple200, label: 'Purple' },
  { value: 'pink', color: c7Colors.pink200, label: 'Pink' },
  { value: 'green', color: c7Colors.green200, label: 'Green' },
  { value: 'yellow', color: c7Colors.yellow200, label: 'Yellow' },
  { value: 'blue', color: c7Colors.blueberry200, label: 'Blue' }
];

const meta: Meta<typeof ColorSelect> = {
  title: 'Form/ColorSelect',
  component: ColorSelect,
  parameters: {
    docs: {
      description: {
        component: "import { ColorSelect } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ColorSelect>;

export const Basic: Story = {
  render: () => {
    const [color, setColor] = useState<string | null>('pink');

    return (
      <ColorSelect
        label="Color Code"
        description="Optional. Click the selected color again to remove it."
        options={options}
        value={color}
        onChange={setColor}
      />
    );
  }
};

export const CustomColors: Story = {
  render: () => {
    const [color, setColor] = useState<string | null>('teal');

    return (
      <ColorSelect
        label="Tag Color"
        description="Any valid CSS color can be passed in through options."
        options={[
          { value: 'orange', color: '#FF6600', label: 'Brand Orange' },
          { value: 'teal', color: 'rgb(0, 128, 128)', label: 'Teal' },
          { value: 'slate', color: 'hsl(220, 10%, 45%)', label: 'Slate' },
          { value: 'crimson', color: 'crimson', label: 'Crimson' },
          { value: 'red', color: c7Colors.red200, label: 'Red' },
          { value: 'violet', color: c7Colors.violet200, label: 'Violet' },
          { value: 'black', color: c7Colors.black, label: 'Black' }
        ]}
        value={color}
        onChange={setColor}
      />
    );
  }
};

export const Required: Story = {
  render: () => {
    const [color, setColor] = useState<string | null>('green');

    return (
      <ColorSelect
        label="Color Code"
        required
        options={options}
        value={color}
        onChange={setColor}
      />
    );
  }
};

export const Disabled: Story = {
  render: () => (
    <ColorSelect
      label="Color Code"
      disabled
      options={options}
      value="blue"
      onChange={() => {}}
    />
  )
};

export const WithError: Story = {
  render: () => {
    const [color, setColor] = useState<string | null>(null);

    return (
      <ColorSelect
        label="Color Code"
        errorMessage="Please select a color"
        options={options}
        value={color}
        onChange={setColor}
      />
    );
  }
};
