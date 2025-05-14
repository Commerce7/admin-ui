// @ts-nocheck
import styled from 'styled-components';

interface StyledSubMenuProps {
  $activeClassName: string;
  $borderBottom: boolean;
}

const StyledSubMenu = styled.div<StyledSubMenuProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;

  ${({ theme, $borderBottom }) => {
    if ($borderBottom) {
      return `border-bottom: 1px solid ${theme.c7__ui.borderColor};`;
    }
    return '';
  }}

  a {
    margin-right: 20px;
    font-size: 16px;
    padding: 10px 0 15px;
    cursor: pointer;
    transition: all 0.15s ease;

    ${({ theme, $activeClassName }) => `
      color: ${theme.c7__ui.fontColor};
      border-bottom: 2px solid transparent;
      &:hover:not(.${$activeClassName}), &:focus:not(.${$activeClassName}) {
        border-color: ${theme.c7__ui.colors.blue400};
      }
      &.${$activeClassName} {
        color: ${theme.c7__ui.linkColor};
        border-color: ${theme.c7__ui.colors.blue400};
      }
    `}
  }
`;

interface StyledSubMenuItemProps {
  $activeClassName: string;
  $borderBottom: boolean;
}

const StyledSubMenuItem = styled.div<StyledSubMenuItemProps>`
  margin-right: 20px;
  font-size: 16px;
  padding: 10px 0 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all 0.15s ease;

  ${({ theme, $activeClassName }) => `
  color: ${theme.c7__ui.fontColor};
  border-bottom: 2px solid transparent;
  &:hover:not(.${$activeClassName}), &:focus:not(.${$activeClassName}) {
    border-color: ${theme.c7__ui.colors.blue400};
  }
  &.${$activeClassName} {
    color: ${theme.c7__ui.linkColor};
    border-color: ${theme.c7__ui.colors.blue400};
  }
`}
`;

export { StyledSubMenu, StyledSubMenuItem };
