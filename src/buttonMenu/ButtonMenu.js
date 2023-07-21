/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import { useRef, useState, useId } from 'react';

import { StyledButton, StyledButtonIcon } from '../button/Button.styles';
import DropdownMenu from '../common/dropdown/DropdownMenu';
import DropdownWrapper from '../common/dropdown/DropdownWrapper';
import useEscKeydown from '../utils/hooks/useEscKeydown';
import useOnClickOutside from '../utils/hooks/useOnClickOutside';

const ButtonMenu = (props) => {
  const {
    label,
    className,
    disabled,
    children,
    variant,
    size,
    dataTestId,
    onClick
  } = props;

  const wrapperRef = useRef();
  const id = useId();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useOnClickOutside(wrapperRef, (e) => handleCloseDropdown(e));
  useEscKeydown((e) => handleCloseDropdown(e));

  const handleSelectedItem = () => setDropdownVisible(false);

  const handleToggleDropdown = (e) => {
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

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const dropdownId = `buttonMenu-${id}-dropdown`;
  const buttonId = `buttonMenu-${id}-button`;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
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

ButtonMenu.defaultProps = {
  className: '',
  disabled: false,
  label: 'Actions',
  variant: 'secondary',
  size: 'default',
  dataTestId: null,
  onClick: null
};

ButtonMenu.propTypes = {
  /**
   * The content of the component.
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
   * Set the label on the button
   */
  label: PropTypes.string,

  /**
   * Control the size of the button
   */
  size: PropTypes.oneOf(['default', 'small']),

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'text']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * Allows passing in a onClick function to be executed when the ButtonMenu is clicked.
   */
  onClick: PropTypes.func
};

export default ButtonMenu;
