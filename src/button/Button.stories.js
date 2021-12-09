import styled from 'styled-components';
import Button from '.';

export const Basic = () => (
  <StyledContainer>
    <Button>Button</Button>
  </StyledContainer>
);

Basic.story = {
  name: 'Basic'
};

export const Variants = () => (
  <StyledContainer>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="text">Text Button</Button>
    <Button variant="link">Link Button</Button>
  </StyledContainer>
);

Variants.story = {
  name: 'Variants'
};

export const Disabled = () => (
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
);

Disabled.story = {
  name: 'Disabled'
};

export const Loading = () => (
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
);

Loading.story = {
  name: 'Loading'
};

export const Size = () => (
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
);

Size.story = {
  name: 'Size'
};

export const Icon = () => (
  <StyledContainer>
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
);

Icon.story = {
  name: 'Icon'
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export default {
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
