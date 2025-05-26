import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { Theme } from 'ui';

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

const IconRow = styled.div<{ theme: Theme }>`
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

export const Basic: Story = {
  render: () => (
    <Grid>
      <Icon icon="cart" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of an icon.'
      }
    }
  }
};

export const Variants: Story = {
  render: () => (
    <Grid>
      <Icon icon="cart" variant="default" />
      <Icon icon="cart" variant="success" />
      <Icon icon="cart" variant="error" />
      <Icon icon="cart" variant="text" />
    </Grid>
  ),
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
  render: () => (
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
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be rendered in different sizes using the size prop.'
      }
    }
  }
};

export const Clickable: Story = {
  render: () => (
    <Grid>
      <Icon icon="add" onClick={action('on-click-add')} label="Add to cart" />
      <Icon
        icon="remove"
        onClick={action('on-click-remove')}
        label="Remove from cart"
        size={48}
      />
    </Grid>
  ),
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
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
            <Icon icon={iconKey} />
            {iconKey}
          </IconRow>
        ))}
      </Grid>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A searchable list of all available icons.'
      }
    }
  }
};
