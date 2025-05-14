import * as React from 'react';

import { StyledCard } from './Card.styles';

export interface CardProps {
  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * The content of the component.
   */
  children: React.ReactNode;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string | null;

  /**
   * Add variant to change the background color
   */
  variant?: 'default' | 'white';
}

const Card: React.FC<CardProps> = ({
  children,
  className = undefined,
  dataTestId = null,
  variant = 'default'
}) => (
  <StyledCard className={className} data-testid={dataTestId} variant={variant}>
    {children}
  </StyledCard>
);

export default Card;
