import PropTypes from 'prop-types';
import React from 'react';

import { StyledTr } from './Tr.styles';

const Tr = React.forwardRef((props, ref) => {
  const {
    children = null,
    className = '',
    onClick = null,
    dataTestId = null
  } = props;
  return (
    <StyledTr
      onClick={onClick}
      className={className}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </StyledTr>
  );
});

Tr.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element.
   */
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Tr;
