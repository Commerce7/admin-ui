import styled from 'styled-components';
import { StyledIcon as UIStyledIcon } from '../icon/Icon.styles';
import { backgroundColors } from '../icon/theme';

const StyledIcon = styled(UIStyledIcon)`
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
`;

const StyledDisplayIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => backgroundColors[theme.c7__ui.mode]};
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

export { StyledDisplayIcon, StyledIcon };
