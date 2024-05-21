import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import {
  StyledButton,
  StyledButtonIcon,
  StyledButtonText,
  StyledLoadingIcon
} from '../button/Button.styles';

const LinkButton = forwardRef((props, ref) => {
  const {
    children,
    className,
    component,
    disabled,
    download,
    loading,
    href,
    rel,
    startIcon,
    endIcon,
    target,
    variant,
    size,
    dataTestId,
    onClick,
    ...rest
  } = props;

  let as = 'a';
  let customComponentProps = {};

  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  return (
    <StyledButton
      as={disabled || loading ? null : as}
      ref={ref}
      className={className}
      disabled={disabled || loading}
      href={href}
      target={target}
      rel={rel}
      variant={variant}
      size={size}
      download={download}
      data-testid={dataTestId}
      onClick={onClick}
      {...customComponentProps} // eslint-disable-line
    >
      <StyledButtonText isLoading={loading}>
        {startIcon && (
          <StyledButtonIcon
            buttonVariant={variant}
            icon={startIcon}
            position="start"
            isHidden={loading}
            hasChildren={children !== null}
          />
        )}
        {loading && <StyledLoadingIcon icon="loading" />}
        {children}
        {endIcon && (
          <StyledButtonIcon
            buttonVariant={variant}
            icon={endIcon}
            position="end"
            isHidden={loading}
            hasChildren={children !== null}
          />
        )}
      </StyledButtonText>
    </StyledButton>
  );
});

LinkButton.defaultProps = {
  children: null,
  className: '',
  component: null,
  disabled: false,
  download: null,
  loading: false,
  href: null,
  rel: null,
  startIcon: null,
  target: null,
  variant: 'primary',
  size: 'default',
  dataTestId: null
};

LinkButton.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component: PropTypes.any, // eslint-disable-line

  /**
   * Set the element to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Add download to the dom element
   */
  download: PropTypes.bool,

  /**
   * Set the button to visually show a loading spinner.
   * This will also disable the button.
   */
  loading: PropTypes.bool,

  /**
   * The url to link to.
   */
  href: PropTypes.string,

  /**
   * Set the rel property of the link
   */
  rel: PropTypes.string,

  /**
   * Control the size of the button
   */
  size: PropTypes.oneOf(['default', 'small']),

  /**
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  startIcon: PropTypes.string,

  /**
   * Set the window to open the link in.
   * If this field is set to '_blank', the rel prop should be set to 'noopener noreferrer' for security reasons.
   */
  target: PropTypes.string,

  /**
   * Set the visual property of the component.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'text', 'link']),

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default LinkButton;
