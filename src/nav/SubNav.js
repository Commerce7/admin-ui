import PropTypes from 'prop-types';

import { SubNavStyles } from './Nav.styles';

const SubNav = (props) => {
  const {
    isOpen = false,
    children = null,
    className = null,
    dataTestId = null
  } = props;

  return (
    <SubNavStyles
      isOpen={isOpen}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </SubNavStyles>
  );
};

SubNav.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Open or close Sub Navigation menu
   */
  isOpen: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default SubNav;
