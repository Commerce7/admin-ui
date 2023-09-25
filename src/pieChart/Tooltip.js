import { c7Colors } from '../ui/theme';

const ToolTip = ({ active, payload }) => {
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
export default ToolTip;
