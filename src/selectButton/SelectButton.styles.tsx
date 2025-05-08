// @ts-nocheck

import styled, { keyframes } from 'styled-components';

import Icon from '../icon';

import { colors, shadows } from './theme';

const StyledSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  gap: 3px;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  position: relative;

  border: 1px solid transparent;
  border-width: ${({ selected }) => (selected ? '2px' : '1px')};
  border-color: ${({ theme, selected }) =>
    selected
      ? colors[theme.c7__ui.mode].borderColor.focus
      : colors[theme.c7__ui.mode].borderColor.default};
  border-radius: ${({ theme }) => theme.c7__ui.borderRadius};

  background-color: ${({ theme }) =>
    colors[theme.c7__ui.mode].backgroundColor.default};

  padding: 20px 10px;
  min-height: 80px;
  max-width: 320px;

  text-decoration: none;
  white-space: break-spaces;
  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.default};
  font-weight: 400;
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  &:focus:not(:disabled) {
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.focus};
    background-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].backgroundColor.default};
    border-color: ${({ theme }) => colors[theme.c7__ui.mode].borderColor.focus};
    box-shadow: ${({ theme }) => shadows[theme.c7__ui.mode].default};
  }

  &:hover:not(:disabled) {
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.hover};
    background-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].backgroundColor.hover};
    border-color: ${({ theme }) => colors[theme.c7__ui.mode].borderColor.hover};
    box-shadow: ${({ theme }) => shadows[theme.c7__ui.mode].hover};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.disabled};
    background-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].backgroundColor.disabled};
    border-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].borderColor.disabled};
    box-shadow: ${({ theme }) => shadows[theme.c7__ui.mode].disabled};
    * {
      color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.disabled};
    }
    ${Icon} {
      path {
        fill: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.disabled};
      }
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoadingIcon = styled(Icon)`
  position: absolute;
  width: 20px;
  left: calc(50% - 10px);
  animation: ${rotate} 0.5s linear infinite;
`;

const StyledSmallSelectButton = styled(StyledSelectButton)`
  min-height: 46px;
  min-width: 46px;
  height: 46px;
  max-height: 46px;
  padding: 12px;
  border-radius: 2px;
  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.defaultSmall};

  ${({ hasIcon }) =>
    hasIcon
      ? `
    width: 46px;
    max-width: 46px;
  `
      : ''}

  ${Icon} {
    path {
      fill: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.defaultSmall};
    }
  }
`;

const StyledMediumSelectButton = styled(StyledSelectButton)`
  min-height: 56px;
  min-width: 56px;
  height: 56px;
  max-height: 56px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.c7__ui.borderRadius};

  ${Icon} {
    path {
      fill: ${({ theme }) => theme.c7__ui.fontColor};
    }
  }
`;

export {
  StyledSelectButton,
  StyledLoadingIcon,
  StyledSmallSelectButton,
  StyledMediumSelectButton
};
