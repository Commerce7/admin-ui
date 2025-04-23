import PropTypes from 'prop-types';

import { StyledSubMenu } from './SubMenu.styles';

const SubMenu = (props) => {
  const {
    children = null,
    className = null,
    dataTestId = null,
    borderBottom = false,
    activeClassName = 'active'
  } = props;
  return (
    <StyledSubMenu
      className={className}
      data-testid={dataTestId}
      $activeClassName={activeClassName}
      $borderBottom={borderBottom}
    >
      {children}
    </StyledSubMenu>
  );
};

SubMenu.propTypes = {
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
  dataTestId: PropTypes.string,

  /**
   * Select whether or not there should be a border below the SubMenu.
   */
  borderBottom: PropTypes.bool,

  /**
   * The active className to mark the component as active. Styling targets this classname.
   */
  activeClassName: PropTypes.string
};

export default SubMenu;
