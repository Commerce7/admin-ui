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
  width: ${({ progress }) =>
    `${Math.min(progress, 100)}%`}; /* Cap width at 100% */
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

const StyledContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledContent = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export {
  StyledProgressBarWrapper,
  StyledProgressBar,
  StyledContentWrapper,
  StyledContent
};
