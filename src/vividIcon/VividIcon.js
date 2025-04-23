import PropTypes from 'prop-types';

import { StyledIconButton } from '../icon/Icon.styles';

import { StyledIconContainer, StyledIcon } from './VividIcon.styles';

const VividIcon = (props) => {
  const {
    className = null,
    label = null,
    onClick = null,
    icon,
    color = 'pink',
    dataTestId = null
  } = props;

  if (onClick) {
    return (
      <StyledIconButton
        onClick={onClick}
        type="button"
        aria-label={label}
        title={label}
        data-testid={dataTestId}
      >
        <StyledIconContainer color={color} className={className}>
          <StyledIcon icon={icon} size={20} color={color} />
        </StyledIconContainer>
      </StyledIconButton>
    );
  }

  return (
    <StyledIconContainer
      color={color}
      className={className}
      data-testid={dataTestId}
    >
      <StyledIcon icon={icon} size={20} color={color} />
    </StyledIconContainer>
  );
};

VividIcon.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set the icon to use.
   */
  icon: PropTypes.string.isRequired,

  /**
   * The label for the component.
   * This should be used when passing in an onClick prop, for accessibility reasons.
   */
  label: PropTypes.string,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Set the visual property of the component.
   */
  color: PropTypes.oneOf(['pink', 'blue', 'green', 'teal', 'orange', 'purple']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default VividIcon;
