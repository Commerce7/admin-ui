import styled from 'styled-components';

import { colors } from './theme';

const StyledModalBody = styled.div`
  padding: 20px;
  max-height: 65vh;
  overflow-y: auto;

  color: ${({ theme }) => theme.c7__ui.fontColor};
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  background-color: ${({ theme }) => colors[theme.c7__ui.mode].backgroundColor};
`;

export { StyledModalBody };
