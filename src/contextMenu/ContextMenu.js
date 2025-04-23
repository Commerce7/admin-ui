import PropTypes from 'prop-types';

import { StyledContextMenu } from './ContextMenu.styles';

const ContextMenu = (props) => {
  const { children, className = null, dataTestId = null } = props;
  return (
    <StyledContextMenu className={className} data-testid={dataTestId}>
      {children}
    </StyledContextMenu>
  );
};

ContextMenu.propTypes = {
  /**
   * The contents of the component.
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

export default ContextMenu;
