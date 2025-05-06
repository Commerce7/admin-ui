import React, { ReactNode, useCallback, useId, useRef, useState } from 'react';

import {
  StyledContextMenuIcon,
  StyledContextMenuItem
} from '../common/contextMenu/ContextMenuItem.styles';
import DropdownMenu from '../common/dropdown/DropdownMenu';
import DropdownWrapper from '../common/dropdown/DropdownWrapper';
import useEscKeydown from '../utils/hooks/useEscKeydown';
import useOnClickOutside from '../utils/hooks/useOnClickOutside';

interface ContextMenuMoreActionsProps {
  /**
   * The contents of the component.
   * All children should be a `<ContextMenuItem/>`
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Override the default label of "More Actions".
   */
  label?: string;

  /**
   * Set the element to disabled.
   */
  disabled?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const ContextMenuMoreActions = ({
  children,
  className = '',
  disabled = false,
  dataTestId = '',
  label = 'More Actions'
}: ContextMenuMoreActionsProps) => {
  const [isValidChildren, setValidChildren] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  const dropdownRef = useCallback((node: HTMLDivElement | null) => {
    if (node && !node.firstChild) {
      setValidChildren(false);
    }
  }, []);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useOnClickOutside(buttonRef, () => handleCloseDropdown());
  useEscKeydown(() => handleCloseDropdown());

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
        {label}
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

export default ContextMenuMoreActions;
