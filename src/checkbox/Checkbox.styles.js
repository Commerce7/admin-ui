import styled from 'styled-components';

import { StyledHiddenInput, StyledToggleLabel } from '../common/form/styles';
import Icon from '../icon';

import { colors } from './theme';

const StyledCheckboxIcon = styled(Icon)`
  width: 12px;
  min-width: 12px;
  height: 12px;
  min-height: 12px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  path {
    fill: rgb(255, 255, 255);
    stroke: rgb(255, 255, 255);
    stroke-width: 0.5px;
  }
`;

const StyledCheckbox = styled.span`
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  background: ${({ theme }) =>
    colors[theme.c7__ui.mode].backgroundColor.default};
  border-color: ${({ theme }) => colors[theme.c7__ui.mode].borderColor.default};

  ${StyledToggleLabel}:hover + & {
    border-color: ${({ theme }) => colors[theme.c7__ui.mode].borderColor.hover};
  }

  ${StyledHiddenInput}:disabled + & {
    opacity: 0.4;
    cursor: not-allowed;
    border-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].borderColor.disabled};
  }

  ${StyledHiddenInput}:focus + & {
    border-color: ${({ theme }) => colors[theme.c7__ui.mode].borderColor.focus};
    box-shadow: 0px 0px 1px 3px
      ${({ theme }) => colors[theme.c7__ui.mode].boxShadow.focus};
  }

  ${StyledHiddenInput}:checked + & {
    border-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].borderColor.checked};
    background: ${({ theme }) =>
      colors[theme.c7__ui.mode].backgroundColor.checked};

    ${StyledCheckboxIcon} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export { StyledCheckbox, StyledCheckboxIcon };
