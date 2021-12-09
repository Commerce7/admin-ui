import styled from 'styled-components';

import Icon from '../icon/Icon';

import { colors, sizes } from './theme';

const StyledAlert = styled.div`
  padding: ${({ size }) => sizes[size].padding};
  border-radius: 3px;
  border: none;
  margin-bottom: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ size }) => sizes[size].fontSize};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  background-color: ${({ theme, variant }) =>
    colors[theme.c7__ui.mode].backgroundColor[variant]};

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: ${({ size }) => sizes[size].borderWidth};
    background-color: ${({ theme, variant }) =>
      colors[theme.c7__ui.mode].borderBackground[variant]};
  }
`;

const StyledIcon = styled(Icon)`
  transform: translateY(2px);
  margin-right: ${({ size }) => sizes[size].iconMargin};

  width: ${({ size }) => sizes[size].iconSize};
  min-width: ${({ size }) => sizes[size].iconSize};
  height: auto;
  min-height: auto;

  path {
    fill: ${({ theme, variant }) =>
      colors[theme.c7__ui.mode].iconColor[variant]};
  }
`;

export { StyledAlert, StyledIcon };
