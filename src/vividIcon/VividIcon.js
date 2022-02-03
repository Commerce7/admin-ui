import PropTypes from 'prop-types';
import { StyledIconContainer, StyledIcon } from './VividIcon.styles';

const IconVivid = (props) => {
  const { icon, color, className, dataTestId } = props;

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

IconVivid.defaultProps = {
  className: null,
  dataTestId: null,
  color: 'pink'
};

IconVivid.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set the icon to use.
   */
  icon: PropTypes.string.isRequired,

  /**
   * Set the visual property of the component.
   */
  color: PropTypes.oneOf(['pink', 'blue', 'green', 'teal', 'orange', 'purple']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default IconVivid;
