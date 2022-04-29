import styled from 'styled-components';

import { colors } from './theme';

const StyledInfoCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 20px;
  align-items: stretch;
  margin-bottom: 20px;
`;

const StyledInfoCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid
    ${({ theme, variant }) => colors[theme.c7__ui.mode].borderColor[variant]};
  border-radius: ${({ theme }) => theme.c7__ui.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  background: ${({ theme, variant }) =>
    colors[theme.c7__ui.mode].backgroundColor[variant]};
`;

const StyledIcon = styled.div`
  ${({ theme, variant }) => `
    background: ${colors[theme.c7__ui.mode].iconBackgroundColor[variant]};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    svg {
      width: 24px;
      height: 24px;
      path {
        fill: ${colors[theme.c7__ui.mode].iconFill[variant]};
      }
    }
  `}
`;

const StyledLabel = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: block;
  ${({ theme, variant }) => `
    color: ${colors[theme.c7__ui.mode].labelColor[variant]};
  `}
`;

const StyledTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  display: block;
  text-align: center;
  margin-bottom: 5px;
  ${({ theme, variant }) => `
    color: ${colors[theme.c7__ui.mode].fontColor[variant]};
    a {
      color: ${colors[theme.c7__ui.mode].fontColor[variant]};
      text-decoration: underline;
    }
  `}
`;

const StyledSubtitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  display: block;
  ${({ theme, variant }) => `
    color: ${colors[theme.c7__ui.mode].fontColor[variant]};
  `}
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 50px;
  max-height: 50px;
  margin-bottom: 10px;
`;

export {
  StyledInfoCardGrid,
  StyledInfoCard,
  StyledIcon,
  StyledLabel,
  StyledTitle,
  StyledSubtitle,
  StyledImage
};
