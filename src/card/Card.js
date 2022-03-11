import PropTypes from 'prop-types';

import { StyledCard } from './Card.styles';

const Card = (props) => {
  const { children, className, dataTestId } = props;

  return (
    <StyledCard className={className} data-testid={dataTestId}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  className: null,
  dataTestId: null
};

Card.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Card;
