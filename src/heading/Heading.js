import PropTypes from 'prop-types';

import { StyledHeading } from './Heading.styles';

const Heading = (props) => {
  const { children, level, className, dataTestId } = props;

  let as = 'h2';
  if (level === 1) as = 'h1';
  else if (level === 3) as = 'h3';

  return (
    <StyledHeading as={as} className={className} data-testid={dataTestId}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  level: 2,
  className: null,
  dataTestId: null
};

Heading.propTypes = {
  /**
   * Select what size heading.
   */
  level: PropTypes.oneOf([1, 2, 3]),

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
