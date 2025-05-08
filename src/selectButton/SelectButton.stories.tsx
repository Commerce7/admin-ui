import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import styled from 'styled-components';

import Text from '../text';

import SelectButton from '.';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const meta: Meta<typeof SelectButton> = {
  title: 'Button/SelectButton',
  component: SelectButton,
  parameters: {
    docs: {
      description: {
        component: "import { SelectButton } from '@commerce7/admin-ui'"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SelectButton>;

export const Basic: Story = {
  render: () => (
    <Container>
      <SelectButton>Default</SelectButton>
      <SelectButton selected>Selected</SelectButton>
      <SelectButton loading>Loading</SelectButton>
      <SelectButton disabled>Disabled</SelectButton>
    </Container>
  )
};

export const SmallIcon: Story = {
  render: () => (
    <Container>
      <SelectButton size="small" icon="wine" />
      <SelectButton size="small" icon="tasting" selected />
      <SelectButton size="small" icon="wine" loading />
      <SelectButton size="small" icon="product" disabled />
    </Container>
  )
};

export const SmallText: Story = {
  render: () => (
    <Container>
      <SelectButton size="small">Default</SelectButton>
      <SelectButton size="small" selected>
        Selected
      </SelectButton>
      <SelectButton size="small" loading>
        Loading
      </SelectButton>
      <SelectButton size="small" disabled>
        Disabled
      </SelectButton>
    </Container>
  )
};

const SelectManyExample = () => {
  const [cheese, setCheese] = useState(true);
  const [bacon, setBacon] = useState(true);
  const [noTomato, setNoTomato] = useState(false);

  return (
    <Container>
      <SelectButton selected={cheese} onClick={() => setCheese(!cheese)}>
        Add Cheese
        <Text>$1.00</Text>
      </SelectButton>
      <SelectButton selected={bacon} onClick={() => setBacon(!bacon)}>
        Add Bacon
        <Text>$1.50</Text>
      </SelectButton>
      <SelectButton selected={noTomato} onClick={() => setNoTomato(!noTomato)}>
        No Tomato
      </SelectButton>
    </Container>
  );
};

export const SelectMany: Story = {
  render: () => <SelectManyExample />
};

const SelectOneExample = () => {
  const [tender, setTender] = useState('visa');

  return (
    <Container>
      <SelectButton
        selected={tender === 'visa'}
        onClick={() => setTender('visa')}
      >
        Visa
        <Text>$58.37</Text>
      </SelectButton>
      <SelectButton
        selected={tender === 'mastercard'}
        onClick={() => setTender('mastercard')}
      >
        Mastercard
        <Text>$58.37</Text>
      </SelectButton>
      <SelectButton
        selected={tender === 'cash'}
        onClick={() => setTender('cash')}
      >
        Cash
        <Text>$58.37</Text>
      </SelectButton>
    </Container>
  );
};

export const SelectOne: Story = {
  render: () => <SelectOneExample />
};

export const Medium: Story = {
  render: () => (
    <Container>
      <SelectButton size="medium">Default</SelectButton>
      <SelectButton size="medium" selected>
        Selected
      </SelectButton>
      <SelectButton size="medium" loading>
        Loading
      </SelectButton>
      <SelectButton size="medium" disabled>
        Disabled
      </SelectButton>
    </Container>
  )
};
