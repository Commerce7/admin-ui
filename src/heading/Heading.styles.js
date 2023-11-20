import styled from 'styled-components';

import { fontSize, colors, marginBottom } from './theme';

const StyledHeading = styled.h2`
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor};

  transition: color 0.3s ease-in-out;
  margin: 0 0 ${({ as }) => marginBottom[as]} 0;
  font-size: ${({ as }) => fontSize[as]};
  line-height: 1.4;
`;

export { StyledHeading };
