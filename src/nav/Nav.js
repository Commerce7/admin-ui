import PropTypes from 'prop-types';

import { NavStyles } from './Nav.styles';

const Nav = (props) => {
  const {
    children = null,
    dataTestId = null,
    className = null,
    isOpen = true
  } = props;
  return (
    <NavStyles className={className} data-testid={dataTestId} isOpen={isOpen}>
      {children}
    </NavStyles>
  );
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
   * Open or close Navigation menu
   */
  isOpen: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Nav;
