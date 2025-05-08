import React, { ReactNode } from 'react';

import { StyledHeading } from './Heading.styles';

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps {
  /**
   * Select what size heading.
   */
  level?: HeadingLevel;

  /**
   * The prop to add custom margin bottom.
   */
  marginBottom?: string | null;

  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Heading = ({
  children,
  level = 2,
  marginBottom = null,
  className = '',
  dataTestId = ''
}: HeadingProps) => {
  let as: HeadingElement = 'h2';
  if (level === 1) as = 'h1';
  else if (level === 3) as = 'h3';
  else if (level === 4) as = 'h4';

  return (
    <StyledHeading
      as={as}
      customMarginBottom={marginBottom}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </StyledHeading>
  );
};

Heading.displayName = 'Heading';

export default Heading;
