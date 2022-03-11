import PropTypes from 'prop-types';

import { NavStyles } from './Nav.styles';

const Nav = (props) => {
  const { children, dataTestId, className } = props;
  return (
    <NavStyles className={className} data-testid={dataTestId}>
      {children}
    </NavStyles>
  );
};

Nav.defaultProps = {
  children: null,
  dataTestId: null,
  className: null
};

Nav.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Nav;
