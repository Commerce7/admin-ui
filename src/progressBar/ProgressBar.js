import PropTypes from 'prop-types';

import { c7Colors } from '../ui/theme';

import {
  StyledProgressBarWrapper,
  StyledProgressBar
} from './ProgressBar.styles';

const ProgressBar = (props) => {
  const { progress, className, color, dataTestId } = props;

  return (
    <>
      <StyledProgressBarWrapper className={className} data-testid={dataTestId}>
        <StyledProgressBar progress={progress} color={color} />
      </StyledProgressBarWrapper>
    </>
  );
};

ProgressBar.defaultProps = {
  progress: 0,
  color: c7Colors.blue300,
  className: null,
  dataTestId: null
};

ProgressBar.propTypes = {
  /**
   * Progress of the bar.
   */
  progress: PropTypes.number,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Color of progressbar
   */
  color: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default ProgressBar;
