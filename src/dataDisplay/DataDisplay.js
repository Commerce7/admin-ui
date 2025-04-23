import PropTypes from 'prop-types';

import { StyledInputWrapper } from '../common/form/styles';

import {
  StyledDataDisplayLabel,
  StaticDataDisplayStyles
} from './DataDisplay.styles';

const DataDisplay = (props) => {
  const { className = null, label = null, children = '', dataTestId } = props;

  return (
    <StyledInputWrapper className={className} data-testid={dataTestId}>
      <StyledDataDisplayLabel>{label}</StyledDataDisplayLabel>
      <StaticDataDisplayStyles>{children}</StaticDataDisplayStyles>
    </StyledInputWrapper>
  );
};

DataDisplay.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The label for the component.
   */
  label: PropTypes.string.isRequired,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default DataDisplay;
