import styled from 'styled-components';

const StyledTd = styled.td`
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  text-align: ${({ align }) => align};
  padding: 15px 7px;

  &:first-of-type {
    padding-left: 15px;
  }

  &:last-of-type {
    padding-right: 15px;
  }
`;

export { StyledTd };
