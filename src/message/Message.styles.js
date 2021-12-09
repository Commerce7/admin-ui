import styled from 'styled-components';

import { colors } from './theme';

const StyledMessage = styled.div`
  padding: 20px 30px;
  border-radius: 4px;
  border: 1px solid;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  border-color: ${({ theme }) => colors[theme.c7__ui.mode].borderColor};
  background-color: ${({ theme }) => colors[theme.c7__ui.mode].backgroundColor};

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 5px;
    background-color: ${({ theme, variant }) =>
      colors[theme.c7__ui.mode].borderBackground[variant]};
  }
`;

export { StyledMessage };
