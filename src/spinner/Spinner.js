import PropTypes from 'prop-types';

import Text from '../text';

import { StyledSpinner, StyledIcon } from './Spinner.styles';

const Spinner = (props) => {
  const { label, className, dataTestId } = props;

  return (
    <StyledSpinner className={className} data-testid={dataTestId}>
      <StyledIcon icon="loading" />
      {label && <Text block>{label}</Text>}
    </StyledSpinner>
  );
};

Spinner.defaultProps = {
  label: null,
  className: null,
  dataTestId: null
};

Spinner.propTypes = {
  /**
   * Add a text label below spinner.
   */
  label: PropTypes.string,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Spinner;
