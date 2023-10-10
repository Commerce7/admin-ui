import styled from 'styled-components';

import { colors } from './theme';

const StyledProgressBarWrapper = styled.div`
  width: 100%;
  height: 10px;
  ${({ theme }) => `
    background-color: ${colors[theme.c7__ui.mode].backgroundColor.default};
    border-radius: 8px;
  `}
  position: relative;
`;

const StyledProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  animation: progressAnimation 1s ease-in-out;
  background: ${({ color }) => `${color}`};
  border-radius: 8px;

  @keyframes progressAnimation {
    0% {
      width: 0%;
    }
    100% {
      width: progress;
    }
  }
`;

export { StyledProgressBarWrapper, StyledProgressBar };
