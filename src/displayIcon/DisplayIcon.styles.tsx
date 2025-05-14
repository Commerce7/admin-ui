// @ts-nocheck
import styled from 'styled-components';

import { StyledIcon as UIStyledIcon } from '../icon/Icon.styles';
import { backgroundColors } from '../icon/theme';

const StyledIcon = styled(UIStyledIcon)`
  width: 26px;
  height: 26px;
  min-width: 26px;
  min-height: 26px;
`;

interface StyledDisplayIconProps {
  variant: 'default' | 'success' | 'warning' | 'error' | 'info';
}

const StyledDisplayIcon = styled.div<StyledDisplayIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) =>
    backgroundColors[theme.c7__ui.mode][variant]};
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

export { StyledDisplayIcon, StyledIcon };
