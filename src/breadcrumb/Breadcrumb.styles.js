import styled from 'styled-components';

import Text from '../text';
import Button from '../button';
import { colors } from '../text/theme';

const BreadcrumbWrapper = styled.div`
  &:not(:first-child) {
    display: flex;
    align-items: center;
    &::before {
      content: '>';
      margin: 0 5px;
      font-size: 10px;
    }
  }
  &:not(:last-child) {
    span {
      color: ${({ theme }) => colors[theme.c7__ui.mode].secondaryFontColor};
    }
  }
`;

const BreadcrumbLinkStyles = styled.div``;

const BreadcrumbItemStyles = styled(Text)``;

const BreadcrumbButtonStyles = styled(Button).attrs({
  variant: 'text'
})`
  height: auto;
  padding: 0;
`;

export {
  BreadcrumbWrapper,
  BreadcrumbItemStyles,
  BreadcrumbButtonStyles,
  BreadcrumbLinkStyles
};
