import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import VividIcon from './VividIcon';

export const basic = () => (
  <>
    <VividIcon icon="cart" color="blue" />
  </>
);

basic.story = {
  name: 'Basic'
};

export const colors = () => (
  <Container>
    <VividIcon icon="archive" color="pink" />
    <VividIcon icon="car" color="blue" />
    <VividIcon icon="cashier" color="green" />
    <VividIcon icon="chat" color="teal" />
    <VividIcon icon="carrot" color="orange" />
    <VividIcon icon="bag" color="purple" />
  </Container>
);

colors.story = {
  name: 'Colors'
};

export const onClick = () => (
  <Container>
    <VividIcon
      icon="archive"
      color="pink"
      onClick={action('archive-click')}
      label="archive"
    />
    <VividIcon
      icon="car"
      color="blue"
      onClick={action('car-click')}
      label="car"
    />
  </Container>
);

onClick.story = {
  name: 'Click'
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export default {
  title: 'Icon/VividIcon',
  component: VividIcon,
  parameters: {
    docs: {
      description: {
        component: "import { VividIcon } from '@commerce7/admin-ui'"
      }
    }
  }
};
