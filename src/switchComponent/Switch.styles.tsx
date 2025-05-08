// @ts-nocheck
import styled from 'styled-components';

import { StyledHiddenInput } from '../common/form/styles';

import { colors } from './theme';

const StyledSwitchIcon = styled.span`
  min-width: 32px;
  height: 20px;
  position: relative;
  background-color: transparent;

  &:after,
  &:before {
    content: '';
    display: block;
    transition: all 0.3s ease-in-out;
  }

  &:after {
    background-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].backgroundColor.default};
    width: 100%;
    height: 100%;
    border-radius: 32px;
  }

  &:before {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 3px;
    left: 3px;
    transform: translateX(0px);
  }

  ${StyledHiddenInput}:focus + & {
    &:before {
      box-shadow: 0 0 1px 1px
        ${({ theme }) => colors[theme.c7__ui.mode].boxShadow.focus};
    }
  }

  ${StyledHiddenInput}:disabled + & {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${StyledHiddenInput}:checked + & {
    &:after {
      background: ${({ theme }) =>
        colors[theme.c7__ui.mode].backgroundColor.checked};
    }
    &:before {
      transform: translateX(12px);
    }
  }
`;

export { StyledSwitchIcon };
