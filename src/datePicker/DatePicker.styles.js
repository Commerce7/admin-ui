import styled from 'styled-components';

import { colors, dayColors } from './theme';

const StyledDatePicker = styled.div`
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};
  position: relative;

  .rdt {
    position: relative;
  }
  .rdtPicker {
    display: none;
    top: 100%;
    position: absolute;
    width: 250px;
    padding: 4px;
    margin-top: 1px;
    z-index: 99999 !important;
    background: ${({ theme }) => colors[theme.c7__ui.mode].backgroundColor};
    border: 1px solid ${({ theme }) => colors[theme.c7__ui.mode].borderColor};
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.default};
    box-shadow: rgb(0 0 0 / 15%) 2px 4px 6px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .rdtOpen .rdtPicker {
    display: block;
  }
  .rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }

  .rdtPicker .rdtTimeToggle {
    text-align: center;
  }

  .rdtPicker table {
    width: 100%;
    margin: 0;
  }
  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 28px;
    border-radius: 3px;
    font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  }
  .rdtPicker td {
    cursor: pointer;
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.default};
  }
  .rdtPicker td.rdtDay:hover,
  .rdtPicker td.rdtHour:hover,
  .rdtPicker td.rdtMinute:hover,
  .rdtPicker td.rdtSecond:hover,
  .rdtPicker .rdtTimeToggle:hover {
    background-color: ${({ theme }) =>
      dayColors[theme.c7__ui.mode].backgroundColor.hover};
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.hover};
    cursor: pointer;
  }
  .rdtPicker td.rdtOld {
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.disabled};
  }
  .rdtPicker td.rdtNew {
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.inactive};
  }
  .rdtPicker td.rdtToday {
    position: relative;
  }
  .rdtPicker td.rdtToday {
    background-color: ${({ theme }) =>
      dayColors[theme.c7__ui.mode].backgroundColor.today};
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.default};
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: ${({ theme }) =>
      dayColors[theme.c7__ui.mode].backgroundColor.active};
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.active};
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }

  .rdtPicker td span.rdtOld {
    color: #999999;
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker th {
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.default};
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
    font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 18px;
    vertical-align: top;
  }

  .rdtPrev span,
  .rdtNext span {
    display: block;
    user-select: none;
  }

  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
  }
  .rdtPicker thead tr:first-child th:hover {
    background-color: ${({ theme }) =>
      dayColors[theme.c7__ui.mode].backgroundColor.hover};
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.hover};
  }

  .rdtPicker tfoot {
    border-top: 1px solid #f9f9f9;
  }

  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background-color: #eee;
  }

  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }

  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background-color: ${({ theme }) =>
      dayColors[theme.c7__ui.mode].backgroundColor.hover};
    color: ${({ theme }) => colors[theme.c7__ui.mode].fontColor.hover};
  }

  .rdtCounters {
    display: inline-block;
  }

  .rdtCounters > div {
    float: left;
  }

  .rdtCounter {
    height: 100px;
  }

  .rdtCounter {
    width: 40px;
  }

  .rdtCounterSeparator {
    line-height: 100px;
  }

  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: #eee;
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }

  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }

  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }

  .rdtTime td {
    cursor: default;
  }
`;

const StyledClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 38px;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  svg {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
  }
`;

export { StyledDatePicker, StyledClearButton };
