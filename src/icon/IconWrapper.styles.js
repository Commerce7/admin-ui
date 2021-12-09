import styled from 'styled-components';

import { backgroundColors } from './theme';

const StyledLargeIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => backgroundColors[theme.c7__ui.mode]};
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

export { StyledLargeIcon };
