// @ts-nocheck

import styled from 'styled-components';

import Icon from '../icon';

import { colors } from './theme';

const baseTransition = `all 0.2s ease-in-out`;

const NavLinkIconStyles = styled(Icon)`
  margin-right: 15px;
  path {
    transition: ${baseTransition};
  }
`;

const NavLinkStyles = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 10px;

  transition: ${baseTransition};
  border: none;
  background: transparent;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  ${({ theme, $activeClassName }) => `
    border-radius: ${theme.c7__ui.borderRadius};
    color: ${colors[theme.c7__ui.mode].primaryLink.fontColor.default};

    ${NavLinkIconStyles} {
      margin: 0 10px 0 0;
      path {
        fill: ${colors[theme.c7__ui.mode].primaryLink.svgColor.default};
      }
    }

    &:hover {
        background: ${
          colors[theme.c7__ui.mode].primaryLink.backgroundColor.hover
        };
      ${NavLinkIconStyles} {
        path {
          fill: ${colors[theme.c7__ui.mode].primaryLink.svgColor.hover};
        }
      }
    }

    &.${$activeClassName} {
      color: ${colors[theme.c7__ui.mode].primaryLink.fontColor.active};
      background: ${
        colors[theme.c7__ui.mode].primaryLink.backgroundColor.active
      };
      ${NavLinkIconStyles} {
        path {
          fill: ${colors[theme.c7__ui.mode].primaryLink.svgColor.active};
        }
      }
    }
  `}
`;

const SubNavLinkStyles = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  transition: ${baseTransition};
  border: none;
  background-color: inherit;
  cursor: pointer;
  width: 100%;
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  ${({ theme, $activeClassName }) => `
    border-radius: ${theme.c7__ui.borderRadius};
    color: ${colors[theme.c7__ui.mode].secondaryLink.fontColor.default};

    &:hover {
      background: ${
        colors[theme.c7__ui.mode].secondaryLink.backgroundColor.hover
      };
    }

    &.${$activeClassName} {
      background: ${
        colors[theme.c7__ui.mode].secondaryLink.backgroundColor.active
      };
      color: ${colors[theme.c7__ui.mode].secondaryLink.fontColor.active};
    }
  `}
`;

interface SubNavStylesProps {
  isOpen: boolean;
}

const SubNavStyles = styled.div<SubNavStylesProps>`
  transition: ${baseTransition};
  padding-left: 30px;

  ${({ isOpen }) => `
    max-height: ${isOpen ? '1000px' : '0px'};
    overflow: ${isOpen ? 'visible' : 'hidden'};
    display: ${isOpen ? 'block' : 'none'};
  `}

  button {
    width: fit-content(100%);
  }
`;

interface NavStylesProps {
  isOpen: boolean;
}

const NavStyles = styled.nav<NavStylesProps>`
  background: ${({ theme }) => colors[theme.c7__ui.mode].backgroundColor};
  width: 260px;
  height: 100vh;
  padding: 10px 10px 5px 10px;
  z-index: 1000;
  overflow: auto;
  border-right: 1px solid
    ${({ theme }) => colors[theme.c7__ui.mode].borderColor};
  display: flex;
  flex-direction: column;
  transition:
    left 0.5s ease-in-out,
    background 0.3s ease-in-out,
    border 0.3s ease-in-out,
    visibility 0.5s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? '0px' : '-260px')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

export {
  NavLinkStyles,
  NavLinkIconStyles,
  SubNavLinkStyles,
  SubNavStyles,
  NavStyles
};
