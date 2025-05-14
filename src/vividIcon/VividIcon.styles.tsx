// @ts-nocheck
import styled from 'styled-components';

import Icon from '../icon';

import { colors } from './theme';

const StyledIconContainer = styled.div`
  background: ${({ theme, color }) =>
    colors[theme.c7__ui.mode][color].backgroundColor};
  border-radius: 2px;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 40px;
`;

interface StyledIconProps {
  color: 'pink' | 'blue' | 'green' | 'teal' | 'orange' | 'purple';
}

const StyledIcon = styled(Icon)<StyledIconProps>`
  path {
    fill: ${({ theme, color }) => colors[theme.c7__ui.mode][color].fillColor};
  }
`;

export { StyledIconContainer, StyledIcon };
