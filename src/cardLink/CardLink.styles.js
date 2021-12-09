import styled from 'styled-components';
import Text from '../text';
import Icon from '../icon';
import { colors } from './theme';

const StyledCardLink = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  &:hover,
  :focus {
    background: ${({ theme }) =>
      colors[theme.c7__ui.mode].invertedBackgroundColor};
  }
  text-decoration: none !important;
  color: inherit;
`;

const StyledCardLabel = styled(Text).attrs({ bold: true, block: true })`
  margin: 0;
  font-size: 18px;
  display: block;
  padding: 0 20px;
`;

const StyledCardDescription = styled(Text).attrs({
  secondary: true,
  block: true
})`
  margin: 0;
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
`;

const StyledCardIcon = styled(Icon)`
  margin-top: 5px;
  padding: 10px;
  border-radius: 3px;
  background: ${({ theme }) =>
    colors[theme.c7__ui.mode].invertedBackgroundColor};
  ${StyledCardLink}:hover &, ${StyledCardLink}:focus & {
    background: ${({ theme }) => colors[theme.c7__ui.mode].iconBackgroundColor};
  }
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  StyledCardLink,
  StyledCardIcon,
  StyledCardLabel,
  StyledCardDescription
};
