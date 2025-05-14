import React, { MouseEvent, ReactNode, useId, useRef, useState } from 'react';

import { StyledButton, StyledButtonIcon } from '../button/Button.styles';
import DropdownMenu from '../common/dropdown/DropdownMenu';
import DropdownWrapper from '../common/dropdown/DropdownWrapper';
import useEscKeydown from '../utils/hooks/useEscKeydown';
import useOnClickOutside from '../utils/hooks/useOnClickOutside';

export type ButtonSize = 'default' | 'small';
export type ButtonVariant = 'primary' | 'secondary' | 'text';

export interface ButtonMenuProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set the element to disabled.
   */
  disabled?: boolean;

  /**
   * Set the label on the button
   */
  label?: string;

  /**
   * Control the size of the button
   */
  size?: ButtonSize;

  /**
   * Set the visual property of the component.
   */
  variant?: ButtonVariant;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Allows passing in a onClick function to be executed when the ButtonMenu is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonMenu = ({
  label = 'Actions',
  className = '',
  disabled = false,
  children,
  variant = 'secondary',
  size = 'default',
  dataTestId = '',
  onClick = undefined
}: ButtonMenuProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useOnClickOutside(wrapperRef, () => handleCloseDropdown());
  useEscKeydown(() => handleCloseDropdown());

  const handleSelectedItem = () => setDropdownVisible(false);

  const handleToggleDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    setDropdownVisible(!isDropdownVisible);
  };

  const handleCloseDropdown = () => {
    if (isDropdownVisible) {
      setDropdownVisible(false);
    }
  };

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const dropdownId = `buttonMenu-${id}-dropdown`;
  const buttonId = `buttonMenu-${id}-button`;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div onClick={stopPropagation}>
      <DropdownWrapper
        ref={wrapperRef}
        className={className}
        dataTestId={dataTestId}
      >
        <StyledButton
          onClick={handleToggleDropdown}
          variant={variant}
          size={size}
          id={buttonId}
          aria-haspopup="true"
          aria-controls={dropdownId}
          disabled={disabled}
        >
          {label}
          <StyledButtonIcon
            icon="chevronDown"
            buttonVariant={variant}
            hasChildren
          />
        </StyledButton>
        <DropdownMenu
          isVisible={isDropdownVisible}
          id={dropdownId}
          labelledbyId={buttonId}
          align="right"
          handleSelectedItem={handleSelectedItem}
        >
          {children}
        </DropdownMenu>
      </DropdownWrapper>
    </div>
  );
};

export default ButtonMenu;
