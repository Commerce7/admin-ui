import styled from 'styled-components';

import { colors } from './theme';

const StyledCard = styled.div`
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  padding: 30px;
  transition: all 0.3s ease-in-out;
  ${({ theme, variant }) => `
    background: ${colors[theme.c7__ui.mode].backgroundColor[variant]};
    border: 1px solid ${colors[theme.c7__ui.mode].borderColor};
    border-radius: ${theme.c7__ui.borderRadius};
    box-shadow: ${colors[theme.c7__ui.mode].boxShadow};
    color: ${theme.c7__ui.fontColor};
  `}
`;

export { StyledCard };
