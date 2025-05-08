import React, { FC } from 'react';

import { c7Colors } from '../ui/theme';

interface PayloadItem {
  name: string;
  value: string | number;
  payload?: Record<string, any>;
  dataKey?: string;
  fill?: string;
  [key: string]: any;
}

interface ToolTipProps {
  /**
   * Whether the tooltip is currently active (visible)
   */
  active?: boolean;

  /**
   * The data payload of the tooltip
   */
  payload?: PayloadItem[];
}

/**
 * Custom tooltip component for pie charts
 * Displays the name and value of the hovered segment
 */
const ToolTip: FC<ToolTipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const tooltipStyle = {
      backgroundColor: c7Colors.white,
      borderRadius: '6px',
      color: 'black',
      border: `1px solid ${c7Colors.gray300}`,
      boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.15)',
      padding: '5px'
    };

    const tooltipName = payload[0].name;
    const tooltipValue = payload[0].value;

    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        <p className="label">{`${tooltipName}: ${tooltipValue}`}</p>
      </div>
    );
  }

  return null;
};

ToolTip.displayName = 'PieChartTooltip';

export type { ToolTipProps, PayloadItem };
export default ToolTip;
