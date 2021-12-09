import React from 'react';
import PropTypes from 'prop-types';

import { StyledTableWrapper, StyledTable } from './Table.styles';

const Table = React.forwardRef((props, ref) => {
  const { children, dataTestId } = props;
  return (
    <StyledTableWrapper>
      <StyledTable data-testid={dataTestId} ref={ref}>
        {children}
      </StyledTable>
    </StyledTableWrapper>
  );
});

Table.defaultProps = {
  children: null,
  dataTestId: null
};

Table.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Table;
