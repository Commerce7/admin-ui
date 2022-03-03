import styled from 'styled-components';

const TabsStyles = styled.nav`
  display: flex;
  align-items: stretch;
  column-gap: 4px;
  padding: 0 2.5px;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.c7__ui.borderColor};
`;

const TabStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 48px;
  max-width: 225px;
  flex: 1;
  padding: 0 5px;
  margin-bottom: -1px;
  position: relative;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  ${({ theme, $activeClassName }) => `
    font-size: ${theme.c7__ui.fontSizeSmall};
    font-family: ${theme.c7__ui.fontFamily};
    color: ${theme.c7__ui.secondaryFontColor};
    background-color: ${theme.c7__ui.secondaryBackgroundColor};
    border: 1px solid ${theme.c7__ui.borderColor};
    border-top-left-radius: ${theme.c7__ui.borderRadius};
    border-top-right-radius: ${theme.c7__ui.borderRadius};

    @media ${theme.c7__ui.breakpoints.largeUp} {
      font-size: ${theme.c7__ui.fontSizeBase};
    }
    
    &.${$activeClassName} {
      color: ${theme.c7__ui.fontColor};
      background-color: ${theme.c7__ui.backgroundColor};
      border-bottom: ${theme.c7__ui.backgroundColor};
    }
  `}
`;

const TabBodyStyles = styled.section`
  background: ${({ theme }) => theme.c7__ui.backgroundColor};
  padding: 30px;
`;

export { TabsStyles, TabStyles, TabBodyStyles };
