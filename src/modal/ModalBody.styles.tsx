// @ts-nocheck

import styled from 'styled-components';

import { colors } from './theme';

const StyledModalBody = styled.div`
  padding: 15px;
  max-height: 65vh;
  overflow-y: auto;

  color: ${({ theme }) => theme.c7__ui.fontColor};
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  background-color: ${({ theme }) => colors[theme.c7__ui.mode].backgroundColor};

  ${({ theme }) => `
      @media ${theme.c7__ui.breakpoints.mediumUp} {
        padding: 20px;
      }
    `}
`;

export { StyledModalBody };
