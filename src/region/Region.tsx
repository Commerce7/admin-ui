import React, { ReactNode, useEffect, useState, useRef } from 'react';

import { StyledRegion } from './Region.styles';

export interface RegionProps {
  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Set whether there is a border at bottom of region.
   */
  borderBottom?: boolean;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Region = ({
  children,
  borderBottom = false,
  className = '',
  dataTestId = ''
}: RegionProps) => {
  const [isAnimated, setAnimated] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const handleAnimatonEnd = () => {
    setAnimated(true);
  };

  useEffect(() => {
    const domNode = regionRef.current;

    domNode?.addEventListener('animationend', handleAnimatonEnd, false);

    return () => {
      domNode?.removeEventListener('animationend', handleAnimatonEnd, false);
    };
  }, []);

  return (
    <StyledRegion
      borderBottom={borderBottom}
      isAnimated={isAnimated}
      ref={regionRef}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </StyledRegion>
  );
};

export default Region;
