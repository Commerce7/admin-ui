import styled from 'styled-components';

import { StyledContextMenuItem } from '../contextMenu/ContextMenuItem.styles';

import { dropdownColors, dropdownButtonColors } from './theme';

const StyledDropdown = styled.div`
  overflow: hidden;
  min-width: 100%;
  box-shadow: rgb(0 0 0 / 15%) 2px 4px 6px;
  border-radius: 4px;
  border: 1px solid;
  position: absolute;
  top: 100%;
  left: ${({ align }) => (align === 'left' ? '0' : 'auto')};
  right: ${({ align }) => (align === 'right' ? '0' : 'auto')};
  padding: 5px;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  max-width: 80vw;

  background: ${({ theme }) =>
    dropdownColors[theme.c7__ui.mode].backgroundColor.default};
  border-color: ${({ theme }) =>
    dropdownColors[theme.c7__ui.mode].borderColor.default};

  ${StyledContextMenuItem} {
    padding: 10px 40px 10px 10px;
    margin: 0;
    height: auto;
    width: 100%;
    background-color: ${({ theme }) =>
      dropdownButtonColors[theme.c7__ui.mode].backgroundColor.default};

    &:hover {
      background-color: ${({ theme }) =>
        dropdownButtonColors[theme.c7__ui.mode].backgroundColor.hover};
    }

    &:focus {
      background-color: ${({ theme }) =>
        dropdownButtonColors[theme.c7__ui.mode].backgroundColor.focus};
    }
  }

  ${({ visible }) => `
    opacity: ${visible ? '1' : '0'};
    visibility: ${visible ? 'visible' : 'hidden'}; 
    transform: ${visible ? `translateY(0px)` : `translateY(-10px)`};
  `}
`;

export { StyledDropdown };
