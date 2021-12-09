import React from 'react';
import PropTypes from 'prop-types';

import { StyledTh } from './Th.styles';

const Th = React.forwardRef((props, ref) => {
  const { children, className, align, colSpan, dataTestId } = props;
  return (
    <StyledTh
      align={align}
      className={className}
      colSpan={colSpan}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </StyledTh>
  );
});

Th.defaultProps = {
  align: 'left',
  children: null,
  className: '',
  colSpan: null,
  dataTestId: null
};

Th.propTypes = {
  /**
   * Set the text alignment of the cell.
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),

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
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Th;
