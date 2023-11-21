import styled from 'styled-components';

import { tfootColors } from './theme';

const StyledTfoot = styled.tfoot`
  width: 100%;

  tr {
    background-color: ${({ theme }) =>
      tfootColors[theme.c7__ui.mode].backgroundColor} !important;
    border-top: 1px solid
      ${({ theme }) => tfootColors[theme.c7__ui.mode].borderColor};
  }

  td {
    font-weight: ${({ theme }) => theme.c7__ui.fontWeightStrong};
  }
`;

export { StyledTfoot };
