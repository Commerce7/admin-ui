import PropTypes from 'prop-types';
import React from 'react';

import { StyledTbody } from './Tbody.styles';

const Tbody = React.forwardRef((props, ref) => {
  const { children, className, dataTestId } = props;
  return (
    <StyledTbody className={className} data-testid={dataTestId} ref={ref}>
      {children}
    </StyledTbody>
  );
});

Tbody.defaultProps = {
  children: null,
  className: '',
  dataTestId: null
};

Tbody.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Tbody;
