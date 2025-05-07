// @ts-nocheck
import styled from 'styled-components';

import { colors } from './theme';

const StyledIcon = styled.svg`
  display: inline-block;
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  min-width: ${({ size }) => `${size}`}px;
  min-height: ${({ size }) => `${size}`}px;

  fill: ${({ theme, variant }) => colors[theme.c7__ui.mode][variant]};

  path {
    fill: ${({ theme, variant }) => colors[theme.c7__ui.mode][variant]};
  }
`;

const StyledIconButton = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export { StyledIcon, StyledIconButton };
