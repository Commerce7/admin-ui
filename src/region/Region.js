import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';

import { StyledRegion } from './Region.styles';

const Region = (props) => {
  const {
    children,
    borderBottom = false,
    className = null,
    dataTestId = null
  } = props;
  const [isAnimated, setAnimated] = useState(false);
  const regionRef = useRef();

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

Region.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Set whether there is a border at bottom of region.
   */
  borderBottom: PropTypes.bool,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Region;
