import styled from 'styled-components';

import SelectButton from '.';

export const Basic = () => (
  <Container>
    <SelectButton>Basic</SelectButton>
  </Container>
);

Basic.story = {
  name: 'Basic'
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
