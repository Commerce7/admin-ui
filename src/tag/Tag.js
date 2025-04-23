import PropTypes from 'prop-types';

import {
  StyledTag,
  StyledTagLabel,
  StyledDeleteButton,
  StyledStartIcon,
  StyledEndIcon
} from './Tag.styles';

const Tag = (props) => {
  const {
    children = null,
    className = null,
    onClick = null,
    onDelete = null,
    variant = 'default',
    dataTestId = null,
    startIcon = null,
    endIcon = null
  } = props;

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(e);
  };

  if (onDelete) {
    return (
      <StyledTag
        className={className}
        variant={variant}
        data-testid={dataTestId}
      >
        <StyledTagLabel>{children}</StyledTagLabel>
        <StyledDeleteButton
          onClick={handleDelete}
          type="button"
          variant={variant}
        >
          ✕
        </StyledDeleteButton>
      </StyledTag>
    );
  }

  const as = onClick ? 'button' : 'span';

  return (
    <StyledTag
      className={className}
      as={as}
      variant={variant}
      onClick={onClick}
      data-testid={dataTestId}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {startIcon && (
        <StyledStartIcon
          className={className}
          icon={startIcon}
          size={12}
          variant={variant}
        />
      )}
      <StyledTagLabel>{children}</StyledTagLabel>
      {endIcon && (
        <StyledEndIcon
          className={className}
          icon={endIcon}
          size={12}
          variant={variant}
        />
      )}
    </StyledTag>
  );
};

Tag.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Callback fired when the component delete button is clicked.
   * Adds an 'x' button on the end of the tag.
   */
  onDelete: PropTypes.func,

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['default', 'info', 'warning', 'error', 'success']),

  /**
   * Set the icon at the front of the tag.
   */
  startIcon: PropTypes.string,

  /**
   * Set the icon at the rear of the tag.
   */
  endIcon: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Tag;
