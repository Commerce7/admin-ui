import styled from 'styled-components';

import { thColors } from './theme';

const StyledTh = styled.th`
  text-transform: uppercase;
  font-size: 13px;
  padding: 10px 15px;
  border-bottom: 1px solid;

  text-align: ${({ align }) => align};

  color: ${({ theme }) => thColors[theme.c7__ui.mode].color};
  border-color: ${({ theme }) => thColors[theme.c7__ui.mode].borderColor};
`;

export { StyledTh };
