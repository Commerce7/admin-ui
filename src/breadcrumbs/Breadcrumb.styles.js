import styled from 'styled-components';

import { colors } from '../text/theme';

const StyledBreadcrumb = styled.div`
  &:not(:first-child) {
    color: ${({ theme }) => colors[theme.c7__ui.mode].secondaryFontColor};
    display: flex;
    align-items: center;
    &::before {
      content: '>';
      margin: 0 8px;
      font-size: 12px;
    }
  }
  &:not(:last-child) {
    span {
      color: ${({ theme }) => colors[theme.c7__ui.mode].secondaryFontColor};
      &:hover,
      &:active,
      &:focus {
        color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor};
      }
    }
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
`;

const BreadcrumbLinkStyles = styled.div``;

export { StyledBreadcrumb, BreadcrumbLinkStyles };
