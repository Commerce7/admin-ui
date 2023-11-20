import styled from 'styled-components';

import { thColors } from './theme';

const StyledTh = styled.th`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 1;
  padding: 10px 7px;
  border-bottom: 1px solid;

  text-align: ${({ align }) => align};

  color: ${({ theme }) => thColors[theme.c7__ui.mode].color};
  border-color: ${({ theme }) => thColors[theme.c7__ui.mode].borderColor};

  &:first-of-type {
    padding-left: 15px;
  }

  &:last-of-type {
    padding-right: 15px;
  }
`;

export { StyledTh };
