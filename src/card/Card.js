import PropTypes from 'prop-types';

import { StyledCard } from './Card.styles';

const Card = (props) => {
  const {
    children,
    className = null,
    dataTestId = null,
    variant = 'default'
  } = props;

  return (
    <StyledCard
      className={className}
      data-testid={dataTestId}
      variant={variant}
    >
      {children}
    </StyledCard>
  );
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
  dataTestId: PropTypes.string,

  /**
   * Add variant to change the backgroud color
   */
  variant: PropTypes.oneOf(['default', 'white'])
};

export default Card;
