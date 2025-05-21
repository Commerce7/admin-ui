// @ts-nocheck
import styled from 'styled-components';

import Icon from '../icon';

import { sizes, iconSizes, fontSizes, colors } from './theme';

interface StyledAvatarProps {
  size: 'tiny' | 'small' | 'default' | 'large';
}

const StyledAvatar = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop)
})<StyledAvatarProps>`
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightStrong};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  ${({ size }) => `
    width: ${sizes[size]};
    min-width: ${sizes[size]};
    height: ${sizes[size]};
    min-height: ${sizes[size]};
    font-size: ${fontSizes[size]};
  `}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  padding: 0;
  margin: 0;

  transition: all 0.3s ease-in-out;

  color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor};
  background-color: ${({ theme }) => colors[theme.c7__ui.mode].background};

  img {
    min-width: 100%;
    min-height: 100%;
  }
`;

interface StyledAvatarIconProps {
  avatarSize: 'tiny' | 'small' | 'default' | 'large';
}

const StyledAvatarIcon = styled(Icon)<StyledAvatarIconProps>`
  background-color: transparent;
  ${({ avatarSize }) => `
    width: ${iconSizes[avatarSize]};
    min-width: ${iconSizes[avatarSize]};
    height: ${iconSizes[avatarSize]};
    min-height: ${iconSizes[avatarSize]};
    fill: ${({ theme }) => colors[theme.c7__ui.mode].iconColor};
  `}
  path {
    fill: ${({ theme }) => colors[theme.c7__ui.mode].iconColor};
  }
`;

export { StyledAvatar, StyledAvatarIcon };
