import { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import useOnClickOutside from '../utils/hooks/useOnClickOutside';
import useEscKeydown from '../utils/hooks/useEscKeydown';
import DropdownWrapper from '../common/dropdown/DropdownWrapper';
import DropdownMenu from '../common/dropdown/DropdownMenu';

import {
  StyledContextMenuItem,
  StyledContextMenuIcon
} from '../common/contextMenu/ContextMenuItem.styles';

const ContextMenuMoreActions = (props) => {
  const { children, className, disabled, dataTestId } = props;

  const [isValidChildren, setValidChildren] = useState(true);
  const wrapperRef = useRef();
  const idRef = useRef(Math.random().toString(36).substr(2, 9));

  const dropdownRef = useCallback((node) => {
    if (node && !node.firstChild) {
      setValidChildren(false);
    }
  }, []);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useOnClickOutside(wrapperRef, (e) => handleCloseDropdown(e));
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

  const dropdownId = `contextMenu-${idRef.current}-dropdown`;
  const buttonId = `contextMenu-${idRef.current}-button`;

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
