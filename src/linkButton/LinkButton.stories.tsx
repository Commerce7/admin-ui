import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import Text from '../text/Text';

import LinkButton from '.';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const meta: Meta<typeof LinkButton> = {
  title: 'Button/LinkButton',
  component: LinkButton,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' }
      },
      control: 'text'
    },
    className: {
      description: 'Add className to the outermost element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    component: {
      description:
        'The component to render as a replacement for <a/>. This can be used to pass in components from client-side routing libraries like react-router. If this property is set, all other props will be passed to the component.',
      table: {
        type: { summary: 'any' }
      }
    },
    disabled: {
      description: 'Set the element to disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    download: {
      description: 'Add download to the dom element',
      table: {
        type: { summary: 'boolean' }
      },
      control: 'boolean'
    },
    loading: {
      description:
        'Set the button to visually show a loading spinner. This will also disable the button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    href: {
      description: 'The url to link to.',
      table: {
        type: { summary: 'string' }
      },
      control: 'text'
    },
    rel: {
      description: 'Set the rel property of the link',
      table: {
        type: { summary: 'string' }
      },
      control: 'text'
    },
    size: {
      description: 'Control the size of the button',
      options: ['default', 'small'],
      control: { type: 'select' },
      table: {
        type: { summary: "'default' | 'small'" },
        defaultValue: { summary: 'default' }
      }
    },
    startIcon: {
      description:
        'Add an icon to the start of the element. Valid icons include all options from the <Icon/> component.',
      table: {
        type: { summary: 'string' }
      },
      control: 'text'
    },
    target: {
      description:
        "Set the window to open the link in. If this field is set to '_blank', the rel prop should be set to 'noopener noreferrer' for security reasons.",
      table: {
        type: { summary: 'string' }
      },
      control: 'text'
    },
    variant: {
      description: 'Set the visual property of the component.',
      options: ['primary', 'secondary', 'text', 'link'],
      control: { type: 'select' },
      table: {
        type: { summary: "'primary' | 'secondary' | 'text' | 'link'" },
        defaultValue: { summary: 'primary' }
      }
    },
    dataTestId: {
      description:
        'Add test attribute to the element. Used internally for testing.',
      table: {
        type: { summary: 'string' }
      },
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        component: "import { LinkButton } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Basic: Story = {
  render: () => (
    <StyledContainer>
      <LinkButton href="https://commerce7.com">Button</LinkButton>
    </StyledContainer>
  )
};

export const Variants: Story = {
  render: () => (
    <StyledContainer>
      <LinkButton
        variant="primary"
        startIcon="add"
        href="https://commerce7.com"
      />
      <LinkButton variant="primary" href="https://commerce7.com">
        Primary Button
      </LinkButton>
      <LinkButton
        variant="primary"
        startIcon="add"
        href="https://commerce7.com"
      >
        Primary Button
      </LinkButton>
      <LinkButton variant="primary" endIcon="add" href="https://commerce7.com">
        Primary Button
      </LinkButton>
      <LinkButton variant="secondary" href="https://commerce7.com">
        Secondary Button
      </LinkButton>
      <LinkButton variant="text" href="https://commerce7.com">
        Text Button
      </LinkButton>
      <LinkButton variant="link" href="https://commerce7.com">
        Link Button
      </LinkButton>
    </StyledContainer>
  )
};

export const Disabled: Story = {
  render: () => (
    <StyledContainer>
      <LinkButton variant="primary" disabled>
        Primary Button
      </LinkButton>
      <LinkButton variant="secondary" disabled>
        Secondary Button
      </LinkButton>
      <LinkButton variant="text" disabled>
        Text Button
      </LinkButton>
      <LinkButton variant="link" disabled>
        Link Button
      </LinkButton>
    </StyledContainer>
  )
};

export const Loading: Story = {
  render: () => (
    <StyledContainer>
      <LinkButton variant="primary" loading>
        Primary Button
      </LinkButton>
      <LinkButton variant="secondary" loading>
        Secondary Button
      </LinkButton>
      <LinkButton variant="text" loading>
        Text Button
      </LinkButton>
      <LinkButton variant="link" loading>
        Link Button
      </LinkButton>
    </StyledContainer>
  )
};

export const Size: Story = {
  render: () => (
    <StyledContainer>
      <LinkButton size="small" href="https://commerce7.com">
        Small Link Button
      </LinkButton>
      <LinkButton size="default" href="https://commerce7.com">
        Default Link Button
      </LinkButton>
    </StyledContainer>
  )
};

export const Icon: Story = {
  render: () => (
    <StyledContainer>
      <LinkButton
        variant="primary"
        href="https://commerce7.com"
        startIcon="user"
      >
        View User
      </LinkButton>
      <LinkButton
        variant="link"
        href="https://commerce7.com"
        endIcon="newTab"
        target="_blank"
      >
        ViewDocs
      </LinkButton>
    </StyledContainer>
  )
};

export const Inline: Story = {
  render: () => (
    <StyledContainer>
      <Text>
        ...or the point of sale. They can also be used to include/exclude
        products from coupons.{' '}
        <LinkButton
          variant="link"
          href="https://commerce7.com"
          endIcon="newTab"
          target="_blank"
        >
          ViewDocs
        </LinkButton>
      </Text>
    </StyledContainer>
  )
};
