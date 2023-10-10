import PropTypes from 'prop-types';

import { c7Colors } from '../ui/theme';

import {
  StyledProgressBarWrapper,
  StyledProgressBar,
  StyleContent,
  StyleContentWrapper
} from './ProgressBar.styles';

const ProgressBar = (props) => {
  const { progress, content, className, color, dataTestId } = props;

  const renderCircle = (circleColor) => (
    <svg height="14" width="14">
      <circle cx="7" cy="7" r="6" fill={circleColor} />
    </svg>
  );

  const renderContent = (contentObj) => {
    const hasContent = Object.keys(contentObj);
    if (!hasContent.length) {
      return null;
    }
    return (
      <StyleContentWrapper>
        <StyleContent>
          {renderCircle(contentObj.circleColor)}
          <span>{contentObj.text}</span>
        </StyleContent>
        <span>{contentObj.progress}%</span>
      </StyleContentWrapper>
    );
  };
  return (
    <div>
      <StyledProgressBarWrapper className={className} data-testid={dataTestId}>
        <StyledProgressBar progress={progress} color={color} />
        {renderContent(content)}
      </StyledProgressBarWrapper>
    </div>
  );
};

ProgressBar.defaultProps = {
  progress: 0,
  color: c7Colors.blue300,
  content: {},
  className: null,
  dataTestId: null
};

ProgressBar.propTypes = {
  /**
   * Progress count of the bar.
   */
  progress: PropTypes.number,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Content data shape.
   */
  content: PropTypes.shape({
    text: PropTypes.string,
    circleColor: PropTypes.string,
    progress: PropTypes.number
  }),

  /**
   * Color of the bar
   */
  color: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default ProgressBar;
