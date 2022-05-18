import PropTypes from 'prop-types';
import { useRef, useState, useCallback, useId } from 'react';

import {
  StyledContextMenuItem,
  StyledContextMenuIcon
} from '../common/contextMenu/ContextMenuItem.styles';
import DropdownMenu from '../common/dropdown/DropdownMenu';
import DropdownWrapper from '../common/dropdown/DropdownWrapper';
import useEscKeydown from '../utils/hooks/useEscKeydown';
import useOnClickOutside from '../utils/hooks/useOnClickOutside';

const ContextMenuMoreActions = (props) => {
  const { children, className, disabled, dataTestId } = props;

  const [isValidChildren, setValidChildren] = useState(true);
  const wrapperRef = useRef();
  const buttonRef = useRef();
  const id = useId();

  const dropdownRef = useCallback((node) => {
    if (node && !node.firstChild) {
      setValidChildren(false);
    }
  }, []);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useOnClickOutside(buttonRef, (e) => handleCloseDropdown(e));
  useEscKeydown((e) => handleCloseDropdown(e));

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleCloseDropdown = () => {
    if (isDropdownVisible) {
      setDropdownVisible(false);
    }
  };

  if (!isValidChildren) {
    return null;
  }

  const dropdownId = `contextMenu-${id}-dropdown`;
  const buttonId = `contextMenu-${id}-button`;

  return (
    <DropdownWrapper ref={wrapperRef} className={className}>
      <StyledContextMenuItem
        onClick={handleToggleDropdown}
        disabled={disabled}
        id={buttonId}
        aria-haspopup="true"
        aria-controls={dropdownId}
        type="button"
        data-testid={dataTestId}
        ref={buttonRef}
      >
        <StyledContextMenuIcon icon="moreActions" />
        More Actions
      </StyledContextMenuItem>
      <DropdownMenu
        ref={dropdownRef}
        isVisible={isDropdownVisible}
        id={dropdownId}
        labelledbyId={buttonId}
        align="left"
      >
        {children}
      </DropdownMenu>
    </DropdownWrapper>
  );
};

ContextMenuMoreActions.defaultProps = {
  className: null,
  disabled: false,
  dataTestId: null
};

ContextMenuMoreActions.propTypes = {
  /**
   * The contents of the component.
   * All children should be a `<ContextMenuItem/>`
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set the element to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default ContextMenuMoreActions;
