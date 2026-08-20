import React, { FC, ReactElement } from 'react';
import {
  Bar,
  BarChart as RechartBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

export interface BarChartSeries {
  /** The data key in each data object for this bar */
  key: string;
  /** Display label for the bar (used in tooltip/legend) */
  label: string;
  /** Fill color for the bar */
  color: string;
}

export interface BarChartProps {
  /**
   * The source data array to render the bar chart.
   * Each object should have a category key (see xAxisDataKey) and numeric keys matching each series key.
   */
  data: Record<string, any>[];

  /**
   * The series definitions that describe each bar to render.
   */
  series: BarChartSeries[];

  /**
   * The data key used for the category axis. Defaults to 'period'.
   */
  xAxisDataKey?: string;

  /**
   * The layout of the bar chart.
   */
  layout?: 'horizontal' | 'vertical';

  /**
   * The percentage value of the chart's width or a fixed width.
   */
  width?: string | number;

  /**
   * The percentage value of the chart's height or a fixed height.
   */
  height?: string | number;

  /**
   * The prop to add positioning to BarChart. Refer: https://recharts.org/en-US/api/BarChart#margin
   */
  margin?: { top?: number; right?: number; bottom?: number; left?: number };

  /**
   * The gap between bar categories as a percentage or fixed value.
   */
  barCategoryGap?: string | number;

  /**
   * The gap between bars within the same category.
   */
  barGap?: number;

  /**
   * The fixed width/height of each bar.
   */
  barSize?: number;

  /**
   * The border radius for each bar. Defaults to [3, 3, 0, 0] for horizontal, [0, 3, 3, 0] for vertical.
   */
  barRadius?: [number, number, number, number];

  /**
   * A component to render custom tooltip. Refer: https://recharts.org/en-US/api/Tooltip#content
   */
  tooltip?: ReactElement;

  /**
   * Indicates whether the tooltip is hidden.
   */
  hideTooltip?: boolean;

  /**
   * Indicates whether the X axis is hidden.
   */
  hideXAxis?: boolean;

  /**
   * Indicates whether the Y axis is hidden (only applies to vertical layout).
   */
  hideYAxis?: boolean;

  /**
   * The stroke color for axis tick labels.
   */
  axisColor?: string;

  /**
   * The minimum point size for bars to ensure visibility of zero or near-zero values.
   */
  minPointSize?: number;
}

const BarChart: FC<BarChartProps> = ({
  data,
  series,
  xAxisDataKey = 'period',
  layout = 'horizontal',
  width = '100%',
  height = 180,
  margin,
  barCategoryGap = '30%',
  barGap = 4,
  barSize,
  barRadius,
  tooltip,
  hideTooltip = false,
  hideXAxis = false,
  hideYAxis = true,
  axisColor = '#999',
  minPointSize = 2
}) => {
  if (!data || data.length === 0) return null;

  const isVertical = layout === 'vertical';
  const defaultMargin = {
    top: isVertical ? 0 : 20,
    right: 10,
    left: 10,
    bottom: 5
  };
  const defaultRadius: [number, number, number, number] = isVertical
    ? [0, 3, 3, 0]
    : [3, 3, 0, 0];

  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartBarChart
        data={data}
        layout={layout}
        margin={margin || defaultMargin}
        barCategoryGap={barCategoryGap}
        barGap={barGap}
        barSize={barSize}
      >
        {isVertical ? (
          <>
            <XAxis
              type="number"
              stroke={axisColor}
              tickLine={false}
              axisLine={false}
              hide={hideXAxis}
            />
            <YAxis
              type="category"
              dataKey={xAxisDataKey}
              stroke={axisColor}
              tickLine={false}
              axisLine={false}
              hide={hideYAxis}
            />
          </>
        ) : (
          <XAxis
            dataKey={xAxisDataKey}
            stroke={axisColor}
            tickLine={false}
            axisLine={false}
            hide={hideXAxis}
          />
        )}
        {!hideTooltip && (
          <Tooltip
            content={tooltip}
            cursor={{ fill: 'transparent' }}
            shared={false}
          />
        )}
        {series.map((s) => (
          <Bar
            key={s.key}
            dataKey={s.key}
            name={s.label}
            fill={s.color}
            radius={barRadius || defaultRadius}
            minPointSize={minPointSize}
          />
        ))}
      </RechartBarChart>
    </ResponsiveContainer>
  );
};

BarChart.displayName = 'BarChart';
export default BarChart;
