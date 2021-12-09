import styled from 'styled-components';

import { colors } from './theme';

const StyledModalFooter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;

  background-color: ${({ theme }) => colors[theme.c7__ui.mode].backgroundColor};
  border-top: 1px solid ${({ theme }) => colors[theme.c7__ui.mode].borderColor};
`;

export { StyledModalFooter };
