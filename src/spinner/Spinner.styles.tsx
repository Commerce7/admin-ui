// @ts-nocheck
import styled, { keyframes } from 'styled-components';

import Icon from '../icon';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg); 
  }
`;

const StyledSpinner = styled.div`
  text-align: center;
  padding: 30px 0;
`;

const StyledIcon = styled(Icon)`
  animation: ${rotate} 2s linear infinite;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
`;

export { StyledSpinner, StyledIcon };
