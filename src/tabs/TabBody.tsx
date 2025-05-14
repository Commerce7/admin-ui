import React, { ReactNode } from 'react';

import { TabBodyStyles } from './Tabs.styles';

export interface TabBodyProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const TabBody = ({
  children = null,
  dataTestId = '',
  className = ''
}: TabBodyProps) => (
  <TabBodyStyles className={className} data-testid={dataTestId}>
    {children}
  </TabBodyStyles>
);

export default TabBody;
