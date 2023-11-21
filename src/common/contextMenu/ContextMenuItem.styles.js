import styled from 'styled-components';

import Icon from '../../icon';

import { colors } from './theme';

const StyledContextMenuItem = styled.button`
  appearance: none;
  border: none;
  border-radius: 3px;
  background: transparent;

  height: 46px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  white-space: nowrap;
  padding: 0px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  margin-right: 20px;

  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: 16px;
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.default};

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.disabled};
  }
`;

const StyledContextMenuIcon = styled(Icon)`
  // margin-right: 5px;
  * {
    transition: all 0.3s ease-in-out;
  }

  ${StyledContextMenuItem}:hover:not(:disabled) &, ${StyledContextMenuItem}:focus:not(:disabled) & {
    path {
      fill: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.hover};
    }
  }
`;

const StyledContextMenuImage = styled.img`
  display: block;
  width: 100%;
  max-width: 18px;
  max-height: 18px;
  margin-right: 5px;
`;

export { StyledContextMenuItem, StyledContextMenuIcon, StyledContextMenuImage };
