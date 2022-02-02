import PropTypes from 'prop-types';
import * as Icons from '../icon/icons';

import { StyledIcon } from './DisplayIcon.styles';
import { StyledIconButton } from '../icon/Icon.styles';
import IconWrapper from './IconWrapper';

const DisplayIcon = (props) => {
  const { className, icon, label, onClick, variant, dataTestId } = props;

  const IconComponent = Icons[icon];

  if (!IconComponent) return null;

  if (onClick) {
    return (
      <StyledIconButton
        onClick={onClick}
        type="button"
        aria-label={label}
        title={label}
        data-testid={dataTestId}
      >
        <IconWrapper>
          <StyledIcon
            as={IconComponent}
            variant={variant}
            className={className}
          />
        </IconWrapper>
      </StyledIconButton>
    );
  }

  return (
    <IconWrapper dataTestId={dataTestId}>
      <StyledIcon
        as={IconComponent}
        variant={variant}
        className={className}
        aria-label={label}
      />
    </IconWrapper>
  );
};

DisplayIcon.defaultProps = {
  className: null,
  label: null,
  onClick: null,
  variant: 'default',
  dataTestId: null
};

DisplayIcon.propTypes = {
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
  variant: PropTypes.oneOf(['default', 'success', 'error']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default DisplayIcon;
