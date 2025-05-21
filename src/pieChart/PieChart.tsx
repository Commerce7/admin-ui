/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ReactElement } from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieLabel,
  PieChart as RechartPieChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { ContentType } from 'recharts/types/component/DefaultLegendContent';

export interface PieChartProps {
  /**
   *  The source data array to render pie chart
   */
  data: { name: string; value: string | number }[];

  /**
   *  Set color code for each cell in the pie. Ex: ['#42ACF0', '#DF5F5F', '#BF9D36'];
   */
  colors: string[];

  /**
   * The percentage value of the chart's width or a fixed width.
   */
  width?: string | number;

  /**
   * The percentage value of the chart's height or a fixed height.
   */
  height?: string | number;

  /**
   * The inner radius of the pie's shape
   */
  innerRadius?: string | number;

  /**
   * The outer radius of the pie's shape
   */
  outerRadius?: string | number;

  /**
   * The prop to add positioning to PieChart. Refer: https://recharts.org/en-US/api/PieChart#margin
   */
  margin?: { top?: number; right?: number; bottom?: number; left?: number };

  /**
   * A component to render custom label in the pie chart
   */
  label?: PieLabel<any> | undefined;

  /**
   * The prop to add positioning to legend component. Refer: https://recharts.org/en-US/api/Legend#wrapperStyle
   */
  legendWrapperStyle?: React.CSSProperties | null;

  /**
   * A component to render custom legend in the pie chart
   */
  legend?: ContentType | undefined;

  /**
   * The prop to align legend items. Refer: https://recharts.org/en-US/api/Legend#verticalAlign
   */
  legendProps?: {
    width?: number;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'center' | 'right';
    layout?: 'horizontal' | 'vertical';
  } | null;

  /**
   * A component to render custom tooltip component. Refer: https://recharts.org/en-US/api/Tooltip#content
   */
  tooltip?: ReactElement;

  /**
   * Indicates whether the legend component is hidden
   */
  hideLegend?: boolean;

  /**
   * Indicates whether the tooltip component is hidden
   */
  hideTooltip?: boolean;
}

const PieChart: FC<PieChartProps> = ({
  innerRadius = 50,
  outerRadius = 80,
  data,
  colors,
  label,
  legend,
  width = '100%',
  height = '100%',
  tooltip,
  margin = {
    right: 30,
    left: 20,
    bottom: 40
  },
  hideLegend = false,
  hideTooltip = false,
  legendProps = null,
  legendWrapperStyle = null
}) => {
  if (!data) {
    return null;
  }

  const keys = Object.keys(data[0]);
  const value = keys[1];

  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartPieChart margin={margin}>
        <Pie
          // Passing key to re-render graph animation
          key={Math.floor(Math.random() * 100)}
          data={data}
          cx="50%"
          cy="50%"
          cursor="pointer"
          stroke="0"
          labelLine={false}
          label={label}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey={value}
        >
          {data.map((_entry, index) => (
            <Cell
              key={String(`cell-${index}`)}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
        {!hideTooltip && <Tooltip content={tooltip} />}
        {!hideLegend && (
          <Legend
            content={legend}
            type="line"
            key={value}
            iconType="circle"
            {...legendProps}
            wrapperStyle={legendWrapperStyle || undefined}
          />
        )}
      </RechartPieChart>
    </ResponsiveContainer>
  );
};

PieChart.displayName = 'PieChart';

export default PieChart;
