import React from 'react';

import Text from '../text';
import { c7Colors } from '../ui/theme';

import {
  StyledProgressBarWrapper,
  StyledProgressBar,
  StyledContent,
  StyledContentWrapper
} from './ProgressBar.styles';

interface ContentShape {
  text?: string;
  circleColor?: string;
  progress?: number;
}

export interface ProgressBarProps {
  /**
   * Progress count of the bar.
   */
  progress?: number;

  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Content data shape.
   */
  content?: ContentShape;

  /**
   * Color of the bar
   */
  color?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const ProgressBar = ({
  progress = 0,
  content = {},
  className = '',
  color = c7Colors.blue300,
  dataTestId = ''
}: ProgressBarProps) => {
  const renderCircle = (circleColor: string) => (
    <svg height="14" width="14">
      <circle cx="7" cy="7" r="6" fill={circleColor} />
    </svg>
  );

  const renderContent = (contentObj: ContentShape) => {
    const hasContent = Object.keys(contentObj);
    if (!hasContent.length) {
      return null;
    }
    return (
      <StyledContentWrapper>
        <StyledContent>
          {contentObj.circleColor && renderCircle(contentObj.circleColor)}
          <Text>{contentObj.text}</Text>
        </StyledContent>
        <Text>{contentObj.progress}%</Text>
      </StyledContentWrapper>
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

export default ProgressBar;
