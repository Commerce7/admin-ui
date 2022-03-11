import PropTypes from 'prop-types';

import { LineBreakStyles } from './LineBreak.styles';

const LineBreak = (props) => {
  const { className, dataTestId } = props;
  return <LineBreakStyles className={className} data-testid={dataTestId} />;
};

LineBreak.defaultProps = {
  className: '',
  dataTestId: null
};
LineBreak.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default LineBreak;
