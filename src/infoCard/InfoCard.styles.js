import styled from 'styled-components';

import Text from '../text';

import { colors } from './theme';

const StyledInfoCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 15px;
  align-items: stretch;
`;

const StyledInfoCard = styled.div`
  padding: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  border: 1px solid
    ${({ theme, variant }) => colors[theme.c7__ui.mode].borderColor[variant]};
  border-radius: ${({ theme }) => theme.c7__ui.borderRadiusMedium};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  background: ${({ theme, variant }) =>
    colors[theme.c7__ui.mode].backgroundColor[variant]};
`;

const StyledContentWrapper = styled.div`
  flex: 1;
`;

const StyledIcon = styled.div`
  ${({ variant }) => `
    background: ${variant};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    }
  `}
`;

const StyledLabel = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  margin-bottom: 10px;
  display: block;
  ${({ theme, variant }) => `
    color: ${colors[theme.c7__ui.mode].labelColor[variant]};
  `}
`;

const StyledTitle = styled.span`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  display: block;
  margin-bottom: 5px;
  ${({ theme, variant }) => `
    color: ${colors[theme.c7__ui.mode].fontColor[variant]};
    a {
      color: ${colors[theme.c7__ui.mode].fontColor[variant]};
      text-decoration: underline;
    }
  `}
`;

const StyledSubtitle = styled(Text)`
  ${({ theme, variant }) => `
    color: ${colors[theme.c7__ui.mode].secondaryFontColor[variant]};
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
  StyledContentWrapper,
  StyledIcon,
  StyledLabel,
  StyledTitle,
  StyledSubtitle,
  StyledImage
};
