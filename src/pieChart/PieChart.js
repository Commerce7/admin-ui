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
    innerRadius = 50,
    outerRadius = 80,
    data,
    colors,
    label,
    tooltip,
    hideLegend = false,
    hideTooltip = false
  } = props;

  if (!data) {
    return null;
  }

  const keys = Object.keys(data[0]);
  const value = keys[1];

  return (
    <div style={{ height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartPieChart
          margin={{
            right: 30,
            left: 20,
            bottom: 40
          }}
        >
          <Pie
            // Passing key to re-render graph animation
            key={Math.floor(Math.random() * 100)}
            data={data}
            cx="50%"
            cy="50%"
            cursor="pointer"
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
          {hideTooltip && <Tooltip content={tooltip} />}
          {hideLegend && <Legend iconType="circle" />}
        </RechartPieChart>
      </ResponsiveContainer>
    </div>
  );
};

PieChart.defaultProps = {
  hideLegend: false,
  hideTooltip: false
};

PieChart.propTypes = {
  /**
   * The content of the Label component.
   */
  label: PropTypes.element.isRequired,
  /**
   * The content of the Tooltip component.
   */
  tooltip: PropTypes.element.isRequired,
  /**
   * Set the legend to hide
   */
  hideLegend: PropTypes.bool,
  /**
   * Set the tooltip to hide
   */
  hideTooltip: PropTypes.bool
};
export default PieChart;
