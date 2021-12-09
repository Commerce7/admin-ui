import styled from 'styled-components';

import { fontSize, lineHeight, colors } from './theme';

const StyledHeading = styled.h2`
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor};

  transition: color 0.3s ease-in-out;
  margin: 0 0 20px 0;
  font-size: ${({ as }) => fontSize[as]};
  line-height: ${({ as }) => lineHeight[as]};
`;

export { StyledHeading };
