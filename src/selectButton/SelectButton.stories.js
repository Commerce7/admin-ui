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

export const OptionSelect = () => {
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

OptionSelect.story = {
  name: 'OptionSelect'
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
