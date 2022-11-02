import PropTypes from 'prop-types';
import React from 'react';

import { StyledTableWrapper, StyledTable } from './Table.styles';

const Table = React.forwardRef((props, ref) => {
  const { children, dataTestId, className } = props;
  return (
    <StyledTableWrapper className={className}>
      <StyledTable data-testid={dataTestId} ref={ref}>
        {children}
      </StyledTable>
    </StyledTableWrapper>
  );
});

Table.defaultProps = {
  children: null,
  dataTestId: null,
  className: ''
};

Table.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * Add className for custom styling of the top div element containing the table
   */
  className: PropTypes.string
};

export default Table;
