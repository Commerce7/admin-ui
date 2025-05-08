import React, { FC } from 'react';
import styled from 'styled-components';

import Text from '../text';

export interface LegendItem {
  title?: string;
  value: string | number;
  color: string;
}

export interface LegendProps {
  /**
   *  The source data to render legend component
   */
  data: LegendItem[];

  /**
   *  Renders legends vertically if it is true
   */
  isVertical?: boolean;

  /**
   *  The width of legend
   */
  width?: string | number;

  /**
   *  The header title of legend
   */
  legendHeader?: string;
}

interface LegendStyledWrapperProps {
  width?: string | number;
  isVertical: boolean;
}

const LegendStyledWrapper = styled.div<LegendStyledWrapperProps>`
  display: flex;
  gap: 12px;
  flex-direction: row;
  ${({ isVertical, width }) =>
    isVertical &&
    `flex-direction: column; 
     row-gap: 8px;
     width: ${width};`};
`;

const StyledLegendItem = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCircle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const StyledValueText = styled(Text)`
  margin-left: auto;
`;

const StyledLegendHeader = styled(Text)`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Legend: FC<LegendProps> = ({
  data,
  width = '15%',
  legendHeader = '',
  isVertical = false
}) => {
  const renderCircle = (color: string) => (
    <svg height="14" width="14">
      <circle cx="7" cy="7" r="6" fill={color} />
    </svg>
  );

  return (
    <LegendStyledWrapper width={width} isVertical={isVertical}>
      {legendHeader && <StyledLegendHeader>{legendHeader}</StyledLegendHeader>}
      {data.map((legend) => (
        <StyledLegendItem key={`item-${legend.title || legend.color}`}>
          <StyledCircle>{renderCircle(legend.color)}</StyledCircle>
          {legend.title && <Text>{legend.title}</Text>}
          <StyledValueText>{legend.value}</StyledValueText>
        </StyledLegendItem>
      ))}
    </LegendStyledWrapper>
  );
};

Legend.displayName = 'Legend';

export default Legend;
