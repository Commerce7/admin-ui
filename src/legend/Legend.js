import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../text';

const Legend = (props) => {
  const { data, width, legendHeader } = props;

  const renderCircle = (color) => (
    <svg height="14" width="14">
      <circle cx="7" cy="7" r="6" fill={color} />
    </svg>
  );

  return (
    <LegendStyledWrapper width={width}>
      {legendHeader && <StyledLegendHeader>{legendHeader}</StyledLegendHeader>}
      {data.map((legend) => (
        <StyledLegendItem key={`item-${legend.title}`}>
          <StyledCircle>{renderCircle(legend.color)}</StyledCircle>
          <Text>{legend.title}</Text>
          <StyledValueText>{legend.value}</StyledValueText>
        </StyledLegendItem>
      ))}
    </LegendStyledWrapper>
  );
};

const LegendStyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  ${({ width }) => `
    width: ${width};
  `}
`;

const StyledLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledCircle = styled.div`
  margin-right: 5px;
`;

const StyledValueText = styled(Text)`
  margin-left: auto;
`;

const StyledLegendHeader = styled(Text)`
  font-size: 16px;
  margin-bottom: 10px;
`;

Legend.defaultProps = {
  width: '15%',
  legendHeader: ''
};

Legend.propTypes = {
  /**
   *  The source data to render legend component
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string
    })
  ).isRequired,
  /**
   *  The width of legend
   */
  width: PropTypes.string,
  /**
   *  The header title of legend
   */
  legendHeader: PropTypes.string
};

export default Legend;
