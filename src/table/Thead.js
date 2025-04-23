import PropTypes from 'prop-types';
import React from 'react';

import { StyledThead } from './Thead.styles';

const Thead = React.forwardRef((props, ref) => {
  const { children = '', className, dataTestId = null } = props;
  return (
    <StyledThead className={className} data-testid={dataTestId} ref={ref}>
      {children}
    </StyledThead>
  );
});

Thead.propTypes = {
  /**
   * The content of the component.
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

export default Thead;
