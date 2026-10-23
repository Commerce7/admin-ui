// @ts-nocheck
import styled from 'styled-components';

import { StyledHiddenInput } from '../common/form/styles';
import Icon from '../icon';

import { colors } from './theme';

const SWATCH_SIZE = 34;
const RING_WIDTH = 2;

const StyledColorSelect = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 0 30px 0;
  min-width: 0;
`;

const StyledSwatchList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  /* Keeps the selection rings from being clipped by overflow-hidden parents. */
  padding: ${RING_WIDTH * 2}px;
  margin: -${RING_WIDTH * 2}px;
`;

const StyledSwatchLabel = styled.label`
  display: inline-flex;
  cursor: pointer;
`;

const StyledSwatchIcon = styled(Icon)`
  width: 14px;
  min-width: 14px;
  height: 14px;
  min-height: 14px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  path {
    fill: ${({ theme }) => colors[theme.c7__ui.mode].checkmark};
    stroke: ${({ theme }) => colors[theme.c7__ui.mode].checkmark};
    stroke-width: 0.5px;
  }
`;

const selectedRings = `
  0 0 0 ${RING_WIDTH}px var(--c7-swatch-ring-inner),
  0 0 0 ${RING_WIDTH * 2}px var(--c7-swatch-ring-outer)`;

interface StyledSwatchProps {
  swatchColor: string;
}

const StyledSwatch = styled.span<StyledSwatchProps>`
  --c7-swatch-ring-inner: ${({ theme }) => colors[theme.c7__ui.mode].ring.inner};
  --c7-swatch-ring-outer: ${({ theme }) => colors[theme.c7__ui.mode].ring.outer};
  --c7-swatch-focus: ${({ theme }) => colors[theme.c7__ui.mode].boxShadow.focus};

  width: ${SWATCH_SIZE}px;
  min-width: ${SWATCH_SIZE}px;
  height: ${SWATCH_SIZE}px;
  min-height: ${SWATCH_SIZE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ swatchColor }) => swatchColor};
  transition:
    box-shadow 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  ${StyledSwatchLabel}:hover > ${StyledHiddenInput}:not(:disabled) + & {
    opacity: 0.85;
  }

  ${StyledHiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 4px var(--c7-swatch-focus);
  }

  ${StyledHiddenInput}:checked + & {
    box-shadow: ${selectedRings};

    ${StyledSwatchIcon} {
      visibility: visible;
      opacity: 1;
    }
  }

  ${StyledHiddenInput}:checked:focus-visible + & {
    box-shadow:
      ${selectedRings},
      0 0 0 ${RING_WIDTH * 2 + 3}px var(--c7-swatch-focus);
  }

  ${StyledHiddenInput}:disabled + & {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export {
  StyledColorSelect,
  StyledSwatchList,
  StyledSwatchLabel,
  StyledSwatch,
  StyledSwatchIcon
};
