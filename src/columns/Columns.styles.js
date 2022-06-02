import styled from 'styled-components';

const StyledColumns = styled.div`
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  flex-wrap: ${({ $isWrap }) => ($isWrap ? 'wrap' : 'initial')};

  @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
    display: flex;
    margin: 0 -10px;
    align-items: ${({ align }) => align};
    justify-content: ${({ justify }) => justify};
  }
`;

const columnWidths = {
  1: '8.333333333%',
  2: '16.666666666%',
  3: '25%',
  4: '33.333333333%',
  5: '41.666666666%',
  6: '50%',
  7: '58.333333333%',
  8: '66.666666666%',
  9: '75%',
  10: '83.333333333%',
  11: '91.666666666%',
  12: '100%'
};

const getColumnSpan = (span) => {
  if (['auto', 'none'].includes(span)) {
    return `
      flex: ${span}
    `;
  }
  return `
    width: ${columnWidths[span]};
  `;
};

const StyledColumn = styled.div`
  @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
    padding: 0 10px;
    ${({ $span }) => getColumnSpan($span)}
  }
`;

export { StyledColumns, StyledColumn };
