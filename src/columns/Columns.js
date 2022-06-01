import PropTypes from 'prop-types';

import { StyledColumns } from './Columns.styles';

const Columns = (props) => {
  const { children, justify, align, wrap, className, dataTestId } = props;
  return (
    <StyledColumns
      justify={justify}
      align={align}
      isWrap={wrap}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </StyledColumns>
  );
};

Columns.defaultProps = {
  justify: null,
  align: null,
  wrap: null,
  className: null,
  dataTestId: null
};

Columns.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Sets justify-content to this value.
   */
  justify: PropTypes.string,

  /**
   * Sets align-items to this value.
   */
  align: PropTypes.string,

  /**
   * Sets flex-wrap to this value.
   */
  wrap: PropTypes.string,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Columns;
