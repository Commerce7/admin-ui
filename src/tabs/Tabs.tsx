import React, { ReactNode } from 'react';

import { TabsStyles } from './Tabs.styles';

interface TabsProps {
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

const Tabs = ({
  children = null,
  dataTestId = '',
  className = ''
}: TabsProps) => (
  <TabsStyles
    aria-label="Secondary navigation"
    className={className}
    data-testid={dataTestId}
  >
    {children}
  </TabsStyles>
);

export type { TabsProps };
export default Tabs;
