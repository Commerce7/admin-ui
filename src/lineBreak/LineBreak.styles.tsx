// @ts-nocheck
import styled from 'styled-components';

import { colors } from './theme';

const LineBreakStyles = styled.hr`
  margin: 30px 0;
  border: none;
  height: 0px;
  display: block;

  border-bottom: 1px solid
    ${({ theme }) => colors[theme.c7__ui.mode].borderColor};
`;

export { LineBreakStyles };
