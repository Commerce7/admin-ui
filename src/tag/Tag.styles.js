import styled from 'styled-components';

import Icon from '../icon';

import { colors } from './theme';

const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  min-height: 29px;
  border-radius: 30px;
  border: none;
  margin: 0 5px 5px 0;
  font-size: 13.5px;
  line-height: 1.2;
  max-width: 100%;
  transition: all 0.3s ease-in-out;

  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};

  background-color: ${({ theme, variant }) =>
    colors[theme.c7__ui.mode][variant].backgroundColor};
  color: ${({ theme, variant }) => colors[theme.c7__ui.mode][variant].color};
`;

const StyledStartIcon = styled(Icon)`
  path {
    fill: ${({ theme, variant }) => colors[theme.c7__ui.mode][variant].color};
  }
  margin-right: 5px;
  margin-left: -2px;
`;

const StyledEndIcon = styled(Icon)`
  path {
    fill: ${({ theme, variant }) => colors[theme.c7__ui.mode][variant].color};
  }
  margin-left: 5px;
  margin-right: -2px;
`;

const StyledTagLabel = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  padding 5px;
`;

const StyledDeleteButton = styled.button`
  margin-left: 10px;
  border-radius: 50%;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  min-width: 20px;
  cursor: pointer;
  padding: 0;
  margin-right: -5px;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.4);
  color: ${({ theme, variant }) => colors[theme.c7__ui.mode][variant].color};

  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  font-size: 12px;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export {
  StyledTag,
  StyledTagLabel,
  StyledDeleteButton,
  StyledStartIcon,
  StyledEndIcon
};
