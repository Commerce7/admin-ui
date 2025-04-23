import PropTypes from 'prop-types';

import {
  StyledContextMenuItem,
  StyledContextMenuIcon,
  StyledContextMenuImage
} from './ContextMenuItem.styles';

const ContextMenuItem = (props) => {
  const {
    onClick,
    children,
    className = null,
    icon = null,
    img = null,
    alt = null,
    disabled,
    dataTestId = null
  } = props;
  return (
    <StyledContextMenuItem
      className={className}
      onClick={onClick}
      disabled={disabled}
      type="button"
      data-testid={dataTestId}
    >
      {icon && <StyledContextMenuIcon icon={icon} />}
      {img && <StyledContextMenuImage src={img} alt={alt} />}
      {children}
    </StyledContextMenuItem>
  );
};

ContextMenuItem.propTypes = {
  /**
   * Add an alt to the image inside the element.
   * This should only be used if the img prop is set.
   */
  alt: PropTypes.string,
  /**
   * The contents of the component.
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
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  icon: PropTypes.string,

  /**
   * Add an image to the start of the element.
   */
  img: PropTypes.string,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default ContextMenuItem;
