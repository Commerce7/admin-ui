import styled from 'styled-components';

import Icon from '../icon';
import { StyledFormItem } from '../common/form/styles';
import { svgColors } from './theme';

const StyledInput = styled(StyledFormItem).attrs({
  as: 'input'
})`
  cursor: text;

  ${({ endIcon }) =>
    !!endIcon &&
    `
    padding-right: 35px;
  `}

  ${({ startIcon }) =>
    !!startIcon &&
    `
    padding-left: 35px;
  `}
`;

const StyledIconWrapper = styled.div`
  position: relative;
`;

const StyledInputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;

  left: ${({ iconPosition }) => (iconPosition === 'start' ? '10px' : 'auto')};
  right: ${({ iconPosition }) => (iconPosition === 'end' ? '10px' : 'auto')};

  path {
    fill: ${({ theme }) => svgColors[theme.c7__ui.mode].fill};
    stroke: ${({ theme }) => svgColors[theme.c7__ui.mode].stroke};
    stroke-width: 0.5px;
  }
`;

export { StyledInput, StyledIconWrapper, StyledInputIcon };
