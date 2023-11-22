import styled from 'styled-components';

const StyledTd = styled.td`
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  text-align: ${({ align }) => align};
  padding: 15px 7px;

  &:first-of-type:not(:only-child) {
    padding-left: 15px;
  }

  &:last-of-type:not(:only-child) {
    padding-right: 15px;
  }
`;

export { StyledTd };
