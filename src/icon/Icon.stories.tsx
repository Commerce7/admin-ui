import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Input } from '..';

import Icon from './Icon';
import * as Icons from './icons';

const meta = {
  title: 'Icon/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { Icon } from '@commerce7/admin-ui'"
      }
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

const IconRow = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  svg {
    margin-right: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;
`;

// Story components
const BasicExample = () => (
  <Grid>
    <Icon icon="cart" />
  </Grid>
);

const VariantsExample = () => (
  <Grid>
    <Icon icon="cart" variant="default" />
    <Icon icon="cart" variant="success" />
    <Icon icon="cart" variant="error" />
    <Icon icon="cart" variant="text" />
  </Grid>
);

const SizesExample = () => (
  <Grid>
    <div>
      <Icon icon="cart" />
      <Icon icon="cart" size={24} />
      <Icon icon="cart" size={48} />
    </div>
    <div>
      <Icon icon="cart" variant="success" />
      <Icon icon="cart" size={24} variant="success" />
      <Icon icon="cart" size={48} variant="success" />
    </div>
    <div>
      <Icon icon="cart" variant="error" />
      <Icon icon="cart" size={24} variant="error" />
      <Icon icon="cart" size={48} variant="error" />
    </div>
    <div>
      <Icon icon="cart" variant="text" />
      <Icon icon="cart" size={24} variant="text" />
      <Icon icon="cart" size={48} variant="text" />
    </div>
  </Grid>
);

const OnClickExample = () => (
  <Grid>
    <Icon icon="add" onClick={action('on-click-add')} label="Add to cart" />
    <Icon
      icon="remove"
      onClick={action('on-click-remove')}
      label="Remove from cart"
      size={48}
    />
  </Grid>
);

const IconListExample = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredIcons = Object.keys(Icons).filter(
    (iconKey) =>
      iconKey !== '__namedExportsOrder' &&
      iconKey.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Grid>
      <Input value={searchText} onChange={handleChange} label="Search" />
      {filteredIcons.map((iconKey) => (
        <IconRow key={iconKey}>
          <Icon icon={iconKey} /> {iconKey}
        </IconRow>
      ))}
    </Grid>
  );
};

// Story exports
export const Basic: Story = {
  render: () => <BasicExample />,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of an icon.'
      }
    }
  }
};

export const Variants: Story = {
  render: () => <VariantsExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Icons can be rendered in different variants: default, success, error, and text.'
      }
    }
  }
};

export const Sizes: Story = {
  render: () => <SizesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Icons can be rendered in different sizes using the size prop.'
      }
    }
  }
};

export const Clickable: Story = {
  render: () => <OnClickExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Icons can be made clickable by providing an onClick handler and label.'
      }
    }
  }
};

export const AllIcons: Story = {
  render: () => <IconListExample />,
  parameters: {
    docs: {
      description: {
        story: 'A searchable list of all available icons.'
      }
    }
  }
};
