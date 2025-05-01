import * as React from 'react';

import { StyledText } from './Text.styles';

export interface TextProps {
  /**
   * Override Element Type.
   */
  as?: keyof React.JSX.IntrinsicElements | React.ComponentType<any>;
  /**
   * Display as block (true) or inline-block (false)
   */
  block?: boolean;
  /**
   * The content of the component.
   */
  children?: React.ReactNode | Node;
  /**
   * Add className to the outermost element.
   */
  className?: string;
  /**
   * Text color is error color (red)
   */
  error?: boolean;
  /**
   * Text weight is bold
   */
  strong?: boolean;
  /**
   * Text style is italic
   */
  italic?: boolean;
  /**
   * Smaller text
   */
  small?: boolean;
  /**
   * Text Transform to uppercase
   */
  uppercase?: boolean;
  /**
   * Secondary font color.
   */
  secondary?: boolean;
  /**
   * Strikethrough text.
   */
  strikeThrough?: boolean;
  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Text: React.FC<TextProps> = ({
  as = 'span',
  block = false,
  children,
  className = '',
  error = false,
  strong = false,
  italic = false,
  small = false,
  secondary = false,
  uppercase = false,
  strikeThrough = false,
  dataTestId = ''
}) => (
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

export default Text;
