import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import Button from '.';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "import { Button } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => (
    <StyledContainer>
      <Button>Button</Button>
    </StyledContainer>
  )
};

export const Variants: Story = {
  render: () => (
    <StyledContainer>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="link">Link Button</Button>
    </StyledContainer>
  )
};

export const Disabled: Story = {
  render: () => (
    <StyledContainer>
      <Button variant="primary" disabled>
        Primary Button
      </Button>
      <Button variant="secondary" disabled>
        Secondary Button
      </Button>
      <Button variant="text" disabled>
        Text Button
      </Button>
      <Button variant="link" disabled>
        Link Button
      </Button>
    </StyledContainer>
  )
};

export const Loading: Story = {
  render: () => (
    <StyledContainer>
      <Button variant="primary" loading>
        Primary Button
      </Button>
      <Button variant="secondary" loading>
        Secondary Button
      </Button>
      <Button variant="text" loading>
        Text Button
      </Button>
      <Button variant="link" loading>
        Link Button
      </Button>
    </StyledContainer>
  )
};

export const Size: Story = {
  render: () => (
    <StyledContainer>
      <Button size="small">Small Button</Button>
      <Button size="default">Default Button</Button>
      <Button size="small" variant="link">
        Small Link Button
      </Button>
      <Button size="default" variant="link">
        Default Link Button
      </Button>
      <Button variant="primary" startIcon="link" size="small">
        Small Icon Button
      </Button>
    </StyledContainer>
  )
};

export const Icon: Story = {
  render: () => (
    <StyledContainer>
      <Button variant="primary" startIcon="add" />
      <Button variant="primary" startIcon="add">
        Add to Cart
      </Button>
      <Button variant="primary" endIcon="add">
        Increase Count
      </Button>
      <Button variant="secondary" startIcon="add">
        Add to Cart
      </Button>
      <Button variant="text" startIcon="add">
        Add to Cart
      </Button>
      <Button variant="link" startIcon="link">
        Ashley Greyson
      </Button>
    </StyledContainer>
  )
};
