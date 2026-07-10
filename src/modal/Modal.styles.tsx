// @ts-nocheck
import styled, { css, keyframes } from 'styled-components';

import { colors } from './theme';

// Animation for modal sliding up from bottom
const slideUpFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Animation for modal sliding down to bottom
const slideDownToBottom = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

// Animation for background fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animation for background fade out
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface AnimationProps {
  closing?: boolean;
  animate?: boolean;
}

const StyledModalBackground = styled.div<AnimationProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ closing, animate }) =>
    !animate
      ? 'none'
      : closing
        ? css`
            ${fadeOut} 0.2s ease-in forwards
          `
        : css`
            ${fadeIn} 0.2s ease-out
          `};
`;

const StyledModalContent = styled.div<AnimationProps>`
  box-shadow:
    0 16px 28px 0 rgba(0, 0, 0, 0.22),
    0 25px 55px 0 rgba(0, 0, 0, 0.21);
  border-radius: ${({ theme }) => theme.c7__ui.borderRadiusMedium};
  width: 600px;
  max-width: 90vw;

  background-color: ${({ theme }) => colors[theme.c7__ui.mode].backgroundColor};

  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  color: ${({ theme }) => theme.c7__ui.fontColor};

  animation: ${({ closing, animate }) =>
    !animate
      ? 'none'
      : closing
        ? css`
            ${slideDownToBottom} 0.3s ease-in forwards
          `
        : css`
            ${slideUpFromBottom} 0.3s ease-out
          `};
`;

const StyledModalHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme }) => colors[theme.c7__ui.mode].borderColor};

  ${({ theme }) => `
      @media ${theme.c7__ui.breakpoints.mediumUp} {
        padding: 20px;
      }
    `}
`;

const StyledModalTitle = styled.h2`
  flex: auto;
  margin: 0;
  font-size: 18px;

  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  color: ${({ theme }) => theme.c7__ui.fontColor};
`;

export {
  StyledModalBackground,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle
};
