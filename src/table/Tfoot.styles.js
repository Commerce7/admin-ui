import styled from 'styled-components';

import { tfootColors } from './theme';

const StyledTfoot = styled.tfoot`
  width: 100%;

  tr {
    background-color: ${({ theme }) =>
      tfootColors[theme.c7__ui.mode].backgroundColor} !important;
  }

  td {
    font-weight: ${({ theme }) => theme.c7__ui.fontWeightStrong};
  }
`;

export { StyledTfoot };
