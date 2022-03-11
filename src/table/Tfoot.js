import PropTypes from 'prop-types';
import React from 'react';

import { StyledTfoot } from './Tfoot.styles';

const Tfoot = React.forwardRef((props, ref) => {
  const { children, className, dataTestId } = props;
  return (
    <StyledTfoot className={className} data-testid={dataTestId} ref={ref}>
      {children}
    </StyledTfoot>
  );
});

Tfoot.defaultProps = {
  className: '',
  dataTestId: null
};

Tfoot.propTypes = {
  /**
   * The content of the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Tfoot;
