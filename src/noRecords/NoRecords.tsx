import React from 'react';

import DisplayIcon from '../displayIcon';
import Text from '../text';

import { StyledEmptyMessage, StyledHeading } from './NoRecords.styles';

type IconVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface NoRecordsProps {
  /**
   * The title for the component.
   */
  title?: string;

  /**
   * The description for below the title.
   */
  description?: string;

  /**
   * The icon displayed.
   */
  icon?: string;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Set the visual property of the component.
   */
  iconVariant?: IconVariant;
}

const NoRecords = ({
  className = '',
  dataTestId = 'grid-no-records',
  title = 'No records found',
  description = '',
  icon = 'search',
  iconVariant = 'default'
}: NoRecordsProps) => (
  <StyledEmptyMessage data-testid={dataTestId} className={className}>
    <DisplayIcon icon={icon} variant={iconVariant} />
    <StyledHeading level={3}>{title}</StyledHeading>
    {description && <Text secondary>{description}</Text>}
  </StyledEmptyMessage>
);

export default NoRecords;
