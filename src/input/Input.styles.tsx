// @ts-nocheck
import styled from 'styled-components';

import { StyledFormItem } from '../common/form/styles';
import Icon from '../icon';
import Text from '../text';

import { svgColors } from './theme';

interface StyledInputProps {
  startIcon?: string;
  endIcon?: string;
}

const StyledInput = styled(StyledFormItem).attrs({
  as: 'input'
})<StyledInputProps>`
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

${({ type }) =>
    type === 'color' &&
    `
    max-width: 100px;
    padding: 4px;
  `}
`;

const StyledIconWrapper = styled.div`
  position: relative;
`;

interface StyledInputIconProps {
  iconPosition: 'start' | 'end';
}

const StyledInputIcon = styled(Icon)<StyledInputIconProps>`
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

const StyledInputSuffix = styled(Text)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  right: 10px;
`;

export { StyledInput, StyledIconWrapper, StyledInputIcon, StyledInputSuffix };
