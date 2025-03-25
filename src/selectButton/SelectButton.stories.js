import { useState } from 'react';
import styled from 'styled-components';

import Text from '../text';

import SelectButton from '.';

export const Basic = () => (
  <Container>
    <SelectButton>Basic</SelectButton>
    <SelectButton loading>Loading</SelectButton>
    <SelectButton disabled>Can&apos;t touch this</SelectButton>
  </Container>
);

Basic.story = {
  name: 'Basic'
};

export const Icon = () => (
  <Container>
    <SelectButton size="small" icon="alignLeft" disabled />
    <SelectButton size="small" icon="alignCenter" selected />
    <SelectButton size="small" icon="alignRight" loading />
    <SelectButton size="small" icon="wine" />
  </Container>
);

Icon.story = {
  name: 'SmallIcon'
};

export const SmallText = () => (
  <>
    <Container>
      <SelectButton size="small" disabled>
        Small
      </SelectButton>
      <SelectButton size="small" selected>
        Medium
      </SelectButton>
      <SelectButton size="small" loading>
        Large
      </SelectButton>
    </Container>
    <br />
    <Container>
      <SelectButton size="small" icon="add" disabled>
        Small
      </SelectButton>
      <SelectButton size="small" icon="add" selected>
        Medium
      </SelectButton>
      <SelectButton size="small" icon="add" loading>
        Large
      </SelectButton>
    </Container>
  </>
);

SmallText.story = {
  name: 'SmallText'
};

export const MediumText = () => (
  <>
    <Container>
      <SelectButton size="medium" disabled>
        Small
      </SelectButton>
      <SelectButton size="medium" selected>
        Medium
      </SelectButton>
      <SelectButton size="medium" loading>
        Large
      </SelectButton>
    </Container>
    <br />
    <Container>
      <SelectButton size="medium" icon="add" disabled>
        Small
      </SelectButton>
      <SelectButton size="medium" icon="add" selected>
        Medium
      </SelectButton>
      <SelectButton size="medium" icon="add" loading>
        Large
      </SelectButton>
    </Container>
  </>
);

MediumText.story = {
  name: 'mediumText'
};

export const SelectMany = () => {
  const [cheese, setCheese] = useState(true);
  const [bacon, setBacon] = useState(true);
  const [noTomato, setNoTomato] = useState(false);

  return (
    <>
      <Container>
        <SelectButton selected={cheese} onClick={() => setCheese(!cheese)}>
          Add Cheese
          <Text>$1.00</Text>
        </SelectButton>
        <SelectButton selected={bacon} onClick={() => setBacon(!bacon)}>
          Add Bacon
          <Text>$1.50</Text>
        </SelectButton>
        <SelectButton
          selected={noTomato}
          onClick={() => setNoTomato(!noTomato)}
        >
          No Tomato
        </SelectButton>
      </Container>
      <br />
      <Container>
        <SelectButton
          icon="add"
          selected={cheese}
          onClick={() => setCheese(!cheese)}
        >
          Add Cheese
          <Text>$1.00</Text>
        </SelectButton>
        <SelectButton
          icon="add"
          selected={bacon}
          onClick={() => setBacon(!bacon)}
        >
          Add Bacon
          <Text>$1.50</Text>
        </SelectButton>
        <SelectButton
          icon="add"
          selected={noTomato}
          onClick={() => setNoTomato(!noTomato)}
        >
          No Tomato
        </SelectButton>
      </Container>
    </>
  );
};

SelectMany.story = {
  name: 'SelectMany'
};

export const SelectOne = () => {
  const [tender, setTender] = useState('visa');

  return (
    <>
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
      <br />
      <Container>
        <SelectButton
          icon="add"
          selected={tender === 'visa'}
          onClick={() => setTender('visa')}
        >
          Visa
          <Text>$58.37</Text>
        </SelectButton>
        <SelectButton
          icon="add"
          selected={tender === 'mastercard'}
          onClick={() => setTender('mastercard')}
        >
          Mastercard
          <Text>$58.37</Text>
        </SelectButton>
        <SelectButton
          icon="add"
          selected={tender === 'cash'}
          onClick={() => setTender('cash')}
        >
          Cash
          <Text>$58.37</Text>
        </SelectButton>
      </Container>
    </>
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
