// @ts-nocheck
import styled from 'styled-components';

import { StyledLabel } from '../common/form/styles';

import { colors } from './theme';

const StyledDataDisplayLabel = styled(StyledLabel).attrs({
  as: 'span'
})`
  cursor: initial;
`;

const StaticDataDisplayStyles = styled.p`
  margin: 0;

  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor};
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
`;

export { StyledDataDisplayLabel, StaticDataDisplayStyles };
