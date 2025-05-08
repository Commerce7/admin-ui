import React, { FC } from 'react';

export interface LabelProps {
  /**
   * X-coordinate of the center
   */
  cx: number;

  /**
   * Y-coordinate of the center
   */
  cy: number;

  /**
   * Middle angle of the sector in degrees
   */
  midAngle: number;

  /**
   * Inner radius of the pie chart
   */
  innerRadius: number;

  /**
   * Outer radius of the pie chart
   */
  outerRadius: number;

  /**
   * Percentage value represented by this sector
   */
  percent: number;
}

/**
 * Custom label component for pie chart sectors
 * Displays the percentage value in the middle of each sector
 */
const Label: FC<LabelProps> = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  percent = 0
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={12}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

Label.displayName = 'PieChartLabel';

export default Label;
