// @ts-nocheck
import styled from 'styled-components';

import Icon from '../icon/Icon';

import { AlertVariant } from './Alert';
import { colors, sizes } from './theme';

interface StyledAlertProps {
  variant: 'default' | 'info' | 'error' | 'warning' | 'success';
  size: 'default' | 'small';
}

const StyledAlert = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop)
})<StyledAlertProps>`
  padding: ${({ size }) => sizes[size].padding};
  border-radius: ${({ theme }) => theme.c7__ui.borderRadius};
  border: 1px solid ${({ theme }) => theme.c7__ui.backgroundColor};
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: flex-start;

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

  div {
    line-height: 1.5;
  }
`;

interface StyledIconProps {
  alertVariant: AlertVariant;
  alertSize: 'default' | 'small';
}

const StyledIcon = styled(Icon)<StyledIconProps>`
  margin-right: ${({ alertSize }) => sizes[alertSize].iconMargin};
  margin-top: 4.5px;

  width: ${({ alertSize }) => sizes[alertSize].iconSize};
  min-width: ${({ alertSize }) => sizes[alertSize].iconSize};
  height: auto;
  min-height: auto;

  path {
    fill: ${({ theme, alertVariant }) =>
      colors[theme.c7__ui.mode].iconColor[alertVariant]};
  }
`;

export { StyledAlert, StyledIcon };
