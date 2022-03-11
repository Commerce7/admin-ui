import styled from 'styled-components';

import Text from '../text/Text';

import LinkButton from '.';

export const Basic = () => (
  <StyledContainer>
    <LinkButton href="https://commerce7.com">Button</LinkButton>
  </StyledContainer>
);

Basic.story = {
  name: 'Basic'
};

export const Variants = () => (
  <StyledContainer>
    <LinkButton variant="primary" href="https://commerce7.com">
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
);

Variants.story = {
  name: 'Variants'
};

export const Size = () => (
  <StyledContainer>
    <LinkButton size="small" href="https://commerce7.com">
      Small Link Button
    </LinkButton>
    <LinkButton size="default" href="https://commerce7.com">
      Default Link Button
    </LinkButton>
  </StyledContainer>
);

Size.story = {
  name: 'Size'
};

export const Icon = () => (
  <StyledContainer>
    <LinkButton variant="primary" href="https://commerce7.com" startIcon="user">
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
);

Icon.story = {
  name: 'Icon'
};

export const Inline = () => (
  <StyledContainer>
    <Text>
      ...or the point of sale. They can also be used to include/exclude products
      from coupons.{' '}
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
);

Inline.story = {
  name: 'Inline'
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export default {
  title: 'Button/LinkButton',
  component: LinkButton,
  parameters: {
    docs: {
      description: {
        component: "import { LinkButton } from '@commerce7/admin-ui'"
      }
    }
  }
};
