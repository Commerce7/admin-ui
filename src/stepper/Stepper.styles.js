import styled from 'styled-components';

import Icon from '../icon';
import Text from '../text';

import { colors } from './theme';

const StyledStepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px 5px;
`;

const StyledStepCircle = styled.div`
  background-color: ${({ theme }) =>
    colors[theme.c7__ui.mode].backgroundColor.default};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  color: inherit;
`;

const StyledStepIcon = styled(Icon).attrs({ size: 20 })`
  path {
    fill: ${({ theme }) => colors[theme.c7__ui.mode].iconColor.default};
  }
`;

const StyledLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.c7__ui.borderColor};
  flex: 1;
  display: none;

  @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
    display: block;
    flex: 1;
  }
`;

const StyledStep = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  &:last-of-type {
    @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
      flex: 0;
    }
    > ${StyledLine} {
      display: none;
      width: 0px;
    }
  }
`;

const StyledStepButton = styled.div`
  display: flex;
  margin: 0 5px;
  padding: 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c7__ui.backgroundColor};
  border: none;
  ${({ as }) => (as !== 'div' ? 'cursor: pointer;' : '')}

  @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
    flex-direction: row;
    margin: 0 30px;
  }

  &.${({ $activeClassName }) => $activeClassName} {
    > ${StyledStepCircle} {
      background-color: ${({ theme }) =>
        colors[theme.c7__ui.mode].backgroundColor.active};
      > ${StyledStepIcon} {
        path {
          fill: ${({ theme }) => colors[theme.c7__ui.mode].iconColor.active};
        }
      }
    }
  }
`;

const StyledStepLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px 0 0 0;

  @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
    margin: 0 0 0 9px;
    align-items: start;
  }
`;

const StyledStepText = styled(Text)`
  white-space: nowrap;
`;

const StyledStepDescription = styled(Text)`
  font-size: 18px;
  line-height: 1.2;
  white-space: nowrap;
`;

export {
  StyledStepper,
  StyledStep,
  StyledStepButton,
  StyledStepCircle,
  StyledStepIcon,
  StyledStepLabelWrapper,
  StyledStepText,
  StyledStepDescription,
  StyledLine
};
