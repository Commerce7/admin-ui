import styled from 'styled-components';
import { useState } from 'react';

import Text from '../text';

import SelectButton from '.';

export const Basic = () => (
  <Container>
    <SelectButton>Basic</SelectButton>
  </Container>
);

Basic.story = {
  name: 'Basic'
};

export const Loading = () => (
  <Container>
    <SelectButton loading>Loading</SelectButton>
  </Container>
);

Loading.story = {
  name: 'Loading'
};

export const Disabled = () => (
  <Container>
    <SelectButton disabled>Can&apos;t touch this</SelectButton>
  </Container>
);

Disabled.story = {
  name: 'Disabled'
};

export const SelectMany = () => {
  const [cheese, setCheese] = useState(true);
  const [bacon, setBacon] = useState(true);
  const [noTomato, setNoTomato] = useState(false);

  return (
    <Container>
      <SelectButton isSelected={cheese} onClick={() => setCheese(!cheese)}>
        Add Cheese
        <Text>$1.00</Text>
      </SelectButton>
      <SelectButton isSelected={bacon} onClick={() => setBacon(!bacon)}>
        Add Bacon
        <Text>$1.50</Text>
      </SelectButton>
      <SelectButton
        isSelected={noTomato}
        onClick={() => setNoTomato(!noTomato)}
      >
        No Tomato
      </SelectButton>
    </Container>
  );
};

SelectMany.story = {
  name: 'SelectMany'
};

export const SelectOne = () => {
  const [tender, setTender] = useState('visa');

  return (
    <Container>
      <SelectButton
        isSelected={tender === 'visa'}
        onClick={() => setTender('visa')}
      >
        Visa
        <Text>$58.37</Text>
      </SelectButton>
      <SelectButton
        isSelected={tender === 'mastercard'}
        onClick={() => setTender('mastercard')}
      >
        Mastercard
        <Text>$58.37</Text>
      </SelectButton>
      <SelectButton
        isSelected={tender === 'cash'}
        onClick={() => setTender('cash')}
      >
        Cash
        <Text>$58.37</Text>
      </SelectButton>
    </Container>
  );
};

SelectOne.story = {
  name: 'SelectOne'
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export default {
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
