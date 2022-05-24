import styled, { keyframes } from 'styled-components';

import Icon from '../icon';

import { colors, shadows } from './theme';

const StyledSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  position: relative;

  border: 1px solid transparent;
  border-width: ${({ selected }) => (selected ? '2px' : '1px')};
  border-color: ${({ theme, selected }) =>
    selected
      ? colors[theme.c7__ui.mode].borderColor.default
      : theme.c7__ui.borderColor};
  border-radius: 4px;

  background-color: ${({ theme }) =>
    colors[theme.c7__ui.mode].backgroundColor.default};

  padding: 20px 10px;
  min-height: 80px;
  max-width: 320px;

  text-decoration: none;
  white-space: break-spaces;
  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.default};
  font-weight: 400;
  font-size: 16px;
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

export { StyledSelectButton, StyledLoadingIcon };
