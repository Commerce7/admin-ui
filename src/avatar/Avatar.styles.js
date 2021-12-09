import styled from 'styled-components';

import { sizes, fontSizes, colors } from './theme';

const StyledAvatar = styled.div`
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
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

export { StyledAvatar };
