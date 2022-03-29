import styled from 'styled-components';

import Icon from '../icon';
import Text from '../text';

import { colors } from './theme';

const StepperStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 20px 5px;
`;

const StepWrapperStyles = styled.div`
  position: relative;
  flex: 1;
  padding: 0 0 0 40px;

  &:not(:first-child):before {
    content: '';
    height: 1px;
    top: 25px;
    left: -45%;
    width: 45%;
    position: absolute;
    background-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].backgroundColor.default};
  }
`;

const StepStyles = styled.div`
  text-align: center;

  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
    flex-direction: row;
  }

  &.${({ $activeClassName }) => $activeClassName} {
    > ${StepCircleStyles} {
      background-color: ${({ theme }) =>
        colors[theme.c7__ui.mode].backgroundColor.active};

      > ${StepIconStyles} {
        path {
          fill: ${({ theme }) => colors[theme.c7__ui.mode].iconColor.active};
        }
      }
    }
  }
`;

const StepCircleStyles = styled.div`
  background-color: ${({ theme }) =>
    colors[theme.c7__ui.mode].backgroundColor.default};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50px;
  height: 50px;
  color: inherit;
`;

const StepIconStyles = styled(Icon).attrs({ size: 20 })`
  path {
    fill: ${({ theme }) => colors[theme.c7__ui.mode].iconColor.default};
  }
`;

const StepLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px 0 0 0;

  @media ${({ theme }) => theme.c7__ui.breakpoints.mediumUp} {
    margin: 0 0 0 9px;
    align-items: start;
  }
`;

const StepDescriptionStyles = styled(Text)`
  font-size: 18px;
  line-height: 1.2;
`;

export {
  StepperStyles,
  StepWrapperStyles,
  StepStyles,
  StepCircleStyles,
  StepLabelWrapper,
  StepIconStyles,
  StepDescriptionStyles
};
