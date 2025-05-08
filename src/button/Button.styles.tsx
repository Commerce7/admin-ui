// @ts-nocheck

import styled, { keyframes } from 'styled-components';

import Icon from '../icon';

import { sizes, colors, shadows } from './theme';

const StyledButtonIcon = styled(Icon)`
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  margin: ${({ position, buttonVariant, hasChildren, icon }) => {
    if (!hasChildren && icon) return '0px';
    const iconMargin = buttonVariant === 'link' ? '5px' : '10px';
    return position === 'start' ? `0 ${iconMargin} 0 0` : `0 0 0 ${iconMargin}`;
  }};
`;

interface StyledButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  border-radius: ${({ theme }) => theme.c7__ui.borderRadius};
  appearance: none;
  text-decoration: none;

  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: 16px;
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  padding: ${({ size }) => sizes[size].padding};
  ${({ variant }) =>
    variant === 'link'
      ? `
  padding-left: 0;
  padding-right: 0;
  `
      : ''}

  height: ${({ size }) => sizes[size].height};
  ${({ variant, size }) =>
    variant === 'link' && size === 'small'
      ? `
    height: auto;
    padding: 0;
    `
      : ''}

  color: ${({ variant, theme }) =>
    colors[theme.c7__ui.mode][variant].fontColor.default};
  background-color: ${({ variant, theme }) =>
    colors[theme.c7__ui.mode][variant].backgroundColor.default};
  border-color: ${({ variant, theme }) =>
    colors[theme.c7__ui.mode][variant].borderColor.default};
  box-shadow: ${({ variant, theme }) =>
    shadows[theme.c7__ui.mode][variant].default};

  ${StyledButtonIcon} {
    path,
    polygon {
      transition: all 0.3s ease-in-out;
      fill: ${({ variant, theme }) =>
        colors[theme.c7__ui.mode][variant].iconColor.default};
    }
  }

  &:hover:not(:disabled) {
    color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].fontColor.hover};
    background-color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].backgroundColor.hover};
    border-color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].borderColor.hover};
    box-shadow: ${({ variant, theme }) =>
      shadows[theme.c7__ui.mode][variant].hover};

    ${StyledButtonIcon} {
      path,
      polygon {
        fill: ${({ variant, theme }) =>
          colors[theme.c7__ui.mode][variant].iconColor.hover};
      }
    }
  }

  &:focus:not(:disabled) {
    color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].fontColor.focus};
    background-color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].backgroundColor.focus};
    border-color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].borderColor.focus};
    box-shadow: ${({ variant, theme }) =>
      shadows[theme.c7__ui.mode][variant].focus};

    ${StyledButtonIcon} {
      path,
      polygon {
        fill: ${({ variant, theme }) =>
          colors[theme.c7__ui.mode][variant].iconColor.focus};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].fontColor.disabled};
    background-color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].backgroundColor.disabled};
    border-color: ${({ variant, theme }) =>
      colors[theme.c7__ui.mode][variant].borderColor.disabled};
    box-shadow: ${({ variant, theme }) =>
      shadows[theme.c7__ui.mode][variant].disabled};

    ${StyledButtonIcon} {
      path,
      polygon {
        fill: ${({ variant, theme }) =>
          colors[theme.c7__ui.mode][variant].iconColor.disabled};
      }
    }
  }

  + button,
  + a {
    margin-left: 10px;
  }

  svg {
    path {
      fill: ${({ variant, theme }) =>
        colors[theme.c7__ui.mode][variant].iconColor.default};
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

interface StyledButtonTextProps {
  isLoading?: boolean;
}

const StyledButtonText = styled.span<StyledButtonTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ isLoading }) => (isLoading ? 'transparent' : 'inherit')};
`;

const StyledLoadingIcon = styled(Icon)`
  position: absolute;
  width: 20px;
  left: calc(50% - 10px);
  animation: ${rotate} 0.5s linear infinite;
`;

export { StyledButton, StyledButtonText, StyledLoadingIcon, StyledButtonIcon };
