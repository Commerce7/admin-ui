import PropTypes from 'prop-types';
import { NavStyles } from './Nav.styles';

const Nav = (props) => {
  const { children, dataTestId } = props;
  return <NavStyles data-testid={dataTestId}>{children}</NavStyles>;
};

Nav.defaultProps = {
  children: null,
  dataTestId: null
};

Nav.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Nav;
