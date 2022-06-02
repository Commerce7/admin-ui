import PropTypes from 'prop-types';

import { StyledColumn } from './Columns.styles';

const Column = (props) => {
  const { children, span } = props;
  return <StyledColumn $span={span}>{children}</StyledColumn>;
};

Column.defaultProps = {
  children: '',
  span: 12
};

Column.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The span of this column out of 12.
   */
  span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none', 'auto'])
};

export default Column;
