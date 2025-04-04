/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import {
  Legend,
  ResponsiveContainer,
  Tooltip,
  Pie,
  Cell,
  PieChart as RechartPieChart
} from 'recharts';

const PieChart = (props) => {
  const {
    innerRadius,
    outerRadius,
    data,
    colors,
    label,
    legend,
    width,
    height,
    tooltip,
    margin,
    hideLegend,
    hideTooltip,
    legendProps,
    legendWrapperStyle
  } = props;

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
            iconType="circle"
            {...legendProps}
            wrapperStyle={legendWrapperStyle}
          />
        )}
      </RechartPieChart>
    </ResponsiveContainer>
  );
};

PieChart.defaultProps = {
  width: '100%',
  height: '100%',
  margin: {
    right: 30,
    left: 20,
    bottom: 40
  },
  hideLegend: false,
  hideTooltip: false,
  label: null,
  tooltip: null,
  legend: null,
  legendWrapperStyle: null,
  legendProps: null,
  innerRadius: 50,
  outerRadius: 80
};

PieChart.propTypes = {
  /**
   *  The source data array to render pie chart
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,

  /**
   *  Set color code for each cell in the pie. Ex: ['#42ACF0', '#DF5F5F', '#BF9D36'];
   */
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * The percentage value of the chart's width or a fixed width.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The percentage value of the chart's height or a fixed height.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The inner radius of the pie's shape
   */
  innerRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The outer radius of the pie's shape
   */
  outerRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   *The prop to add positioning to PieChart. Refer: https://recharts.org/en-US/api/PieChart#margin
   */
  margin: PropTypes.shape({}),

  /**
   * A component to render custom label in the pie chart
   */
  label: PropTypes.element,
  /**
   * The prop to add positioning to legend component. Refer: https://recharts.org/en-US/api/Legend#wrapperStyle
   */
  legendWrapperStyle: PropTypes.shape({}),

  /**
   * A component to render custom legend in the pie chart
   */
  legend: PropTypes.element,

  /**
   * The prop to align legend items. Refer: https://recharts.org/en-US/api/Legend#verticalAlign
   */
  legendProps: PropTypes.shape({
    width: PropTypes.number,
    verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    layout: PropTypes.oneOf(['horizontal', 'vertical'])
  }),

  /**
   * A component to render custom tooltip component. Refer: https://recharts.org/en-US/api/Tooltip#content
   */
  tooltip: PropTypes.element,

  /**
   * Indicates whether the legend component is hidden
   */
  hideLegend: PropTypes.bool,

  /**
   * Indicates whether the tooltip component is hidden
   */
  hideTooltip: PropTypes.bool
};

export default PieChart;
