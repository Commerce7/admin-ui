// @ts-nocheck

import styled from 'styled-components';

import { colors } from './theme';

const StyledModalFooter = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => colors[theme.c7__ui.mode].borderColor};

  button,
  a {
    margin-left: 0px !important;
    flex: 1;
    ${({ theme }) => `
      @media ${theme.c7__ui.breakpoints.mediumUp} {
        flex: none;
      }
    `}
  }

  ${({ theme }) => `
      @media ${theme.c7__ui.breakpoints.mediumUp} {
        padding: 20px;
      }
    `}
`;

export { StyledModalFooter };
