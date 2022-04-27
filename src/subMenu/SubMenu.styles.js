import styled from 'styled-components';

const StyledSubMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;

  ${({ theme, $borderBottom }) => {
    if ($borderBottom) {
      return `border-bottom: 1px solid ${theme.c7__ui.borderColor};`;
    }
    return '';
  }}

  a {
    margin-right: 15px;
    font-size: 16px;
    padding: 10px 0;
    cursor: pointer;

    ${({ theme, $activeClassName }) => `
      color: ${theme.c7__ui.fontColor};
      border-bottom: 2px solid transparent;
      &:hover:not(.${$activeClassName}), &:focus:not(.${$activeClassName}) {
        border-color: ${theme.c7__ui.colors.blue400};
      }
      &.${$activeClassName} {
        color: ${theme.c7__ui.colors.blue400};
        border-color: ${theme.c7__ui.colors.blue400};
      }
    `}
  }
`;

const StyledSubMenuItem = styled.div`
  margin-right: 15px;
  font-size: 16px;
  padding: 10px 0;
  cursor: pointer;
  border: none;
  background-color: transparent;

  ${({ theme, $activeClassName }) => `
  color: ${theme.c7__ui.fontColor};
  border-bottom: 2px solid transparent;
  &:hover:not(.${$activeClassName}), &:focus:not(.${$activeClassName}) {
    border-color: ${theme.c7__ui.colors.blue400};
  }
  &.${$activeClassName} {
    color: ${theme.c7__ui.colors.blue400};
    border-color: ${theme.c7__ui.colors.blue400};
  }
`}
`;

export { StyledSubMenu, StyledSubMenuItem };
