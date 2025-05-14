// @ts-nocheck
import styled from 'styled-components';

import { trColors } from './theme';

const StyledTr = styled.tr`
  border-bottom: 1px solid;

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  border-color: ${({ theme }) => trColors[theme.c7__ui.mode].borderColor};
  background-color: ${({ theme }) =>
    trColors[theme.c7__ui.mode].backgroundColor.default};

  &:nth-child(odd) {
    background-color: ${({ theme }) =>
      trColors[theme.c7__ui.mode].backgroundColor.alt};
  }

  &:hover {
    background-color: ${({ theme, onClick }) =>
      onClick ? trColors[theme.c7__ui.mode].backgroundColor.hover : ''};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export { StyledTr };
