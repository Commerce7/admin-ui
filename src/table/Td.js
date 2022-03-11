import PropTypes from 'prop-types';
import React from 'react';

import { StyledTd } from './Td.styles';

const Td = React.forwardRef((props, ref) => {
  const { children, className, onClick, colSpan, align, dataTestId } = props;
  return (
    <StyledTd
      colSpan={colSpan}
      onClick={onClick}
      align={align}
      className={className}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </StyledTd>
  );
});

Td.defaultProps = {
  children: null,
  className: '',
  colSpan: null,
  onClick: null,
  align: 'left',
  dataTestId: null
};

Td.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set the colSpan of the cell.
   */
  colSpan: PropTypes.number,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Set the text alignment of the cell.
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Td;
