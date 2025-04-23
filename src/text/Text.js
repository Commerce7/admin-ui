import PropTypes from 'prop-types';

import { StyledText } from './Text.styles';

const Text = (props) => {
  const {
    as = 'span',
    block = false,
    children = '',
    className = null,
    error = false,
    strong = false,
    italic = false,
    small = false,
    secondary = false,
    uppercase = false,
    strikeThrough = false,
    dataTestId = null
  } = props;

  return (
    <StyledText
      as={as}
      block={block}
      strong={strong}
      error={error}
      italic={italic}
      small={small}
      secondary={secondary}
      className={className}
      uppercase={uppercase}
      strikeThrough={strikeThrough}
      data-testid={dataTestId}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  /**
   * Override Element Type.
   */
  as: PropTypes.string,

  /**
   * Display as block (true) or inline-block (false)
   */
  block: PropTypes.bool,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Text color is error color (red)
   */
  error: PropTypes.bool,

  /**
   * Text weight is bold
   */
  strong: PropTypes.bool,

  /**
   * Text style is italic
   */
  italic: PropTypes.bool,

  /**
   * Smaller text
   */
  small: PropTypes.bool,

  /**
   * Text Transform to uppercase
   */
  uppercase: PropTypes.bool,

  /**
   * Secondary font color.
   */
  secondary: PropTypes.bool,

  /**
   * Strikethrough text.
   */
  strikeThrough: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Text;
