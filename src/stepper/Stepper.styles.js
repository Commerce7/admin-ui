import styled from 'styled-components';

import Text from '../text';

import { colors } from './theme';

const StepperStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 20px 5px;
`;

const StepNumberStyles = styled.div`
  background-color: ${({ theme }) =>
    colors[theme.c7__ui.mode].backgroundColor.default};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 30px;
  height: 30px;
  color: inherit;

  @media ${({ theme }) => theme.mediumUp} {
    width: 50px;
    height: 50px;
  }
`;

const StepStyles = styled.div`
  text-align: center;
  flex: 1;
  padding: 0px 10px;
  position: relative;
  background-color: transparent;
  border: none;

  &:not(:first-child):before {
    content: '';
    height: 1px;
    top: 15px;
    left: -33%;
    width: 66%;
    position: absolute;
    background-color: ${({ theme }) =>
      colors[theme.c7__ui.mode].backgroundColor.default};

    @media ${({ theme }) => theme.mediumUp} {
      top: 25px;
    }
  }

  &.${({ $activeClassName }) => $activeClassName} {
    > ${StepNumberStyles} {
      background-color: ${({ theme }) =>
        colors[theme.c7__ui.mode].backgroundColor.active};
      color: white;
    }
  }
`;

const StepLabelStyles = styled(Text).attrs({ strong: true, block: true })`
  margin-bottom: -5px;
`;

export { StepperStyles, StepStyles, StepNumberStyles, StepLabelStyles };
