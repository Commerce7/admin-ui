import styled from 'styled-components';

import { StyledFormItem } from '../common/form/styles';
import { placeholderColors } from '../common/form/theme';
import Icon from '../icon';
import { svgColors } from '../input/theme';

const StyledSelect = styled(StyledFormItem).attrs({
  as: 'select'
})`
  appearance: none;

  &:not(:focus):invalid {
    color: ${({ theme }) => placeholderColors[theme.c7__ui.mode].color};
  }
`;

const StyledSelectArrow = styled(Icon)`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  pointer-events: none;

  path {
    fill: ${({ theme }) => svgColors[theme.c7__ui.mode].fill};
    stroke: ${({ theme }) => svgColors[theme.c7__ui.mode].stroke};
    stroke-width: 0.5px;
  }
`;

const StyledSelectWrapper = styled.div`
  position: relative;
`;

export { StyledSelect, StyledSelectArrow, StyledSelectWrapper };
