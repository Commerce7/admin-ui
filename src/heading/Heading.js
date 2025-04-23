import PropTypes from 'prop-types';

import { StyledHeading } from './Heading.styles';

const Heading = (props) => {
  const {
    children,
    level = 2,
    marginBottom = null,
    className = null,
    dataTestId = null
  } = props;

  let as = 'h2';
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

Heading.propTypes = {
  /**
   * Select what size heading.
   */
  level: PropTypes.oneOf([1, 2, 3, 4]),

  /**
   * The prop to add custom margin bottom.
   */
  marginBottom: PropTypes.string,

  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Heading;
