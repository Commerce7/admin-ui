import styled from 'styled-components';

import { colors } from '../text/theme';

const StyledBreadcrumb = styled.div`
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

const BreadcrumbLinkStyles = styled.div`
  cursor: pointer;
`;

export { StyledBreadcrumb, BreadcrumbLinkStyles };
