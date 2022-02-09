import { createGlobalStyle } from 'styled-components';

const fontColors = {
  dark: 'rgb(241, 241, 241)',
  light: 'rgb(41, 50, 56)'
};

const secondaryFontColors = {
  dark: 'rgb(152, 158, 164)',
  light: 'rgb(115, 115, 135)'
};

const backgroundColors = {
  dark: 'rgb(41, 50, 56)',
  light: 'rgb(255, 255, 255)'
};

const secondaryBackgroundColors = {
  dark: 'rgb(42, 45, 47)',
  light: 'rgb(248, 248, 248)'
};

const borderColors = {
  dark: 'rgb(88 94 100)',
  light: 'rgb(224 224 224)'
};

const boxShadow = {
  light: '2px 4px 6px rgba(0,0,0,0.15)',
  dark: '2px 4px 6px rgba(0,0,0,0.5)'
};

export const createTheme = (mode) => ({
  c7__ui: {
    mode,
    fontFamily: '"Nunito", sans-serif',
    fontSizeBase: '15px',
    fontSizeSmall: '14px',
    fontWeightBase: '300',
    fontWeightStrong: '600',
    fontColor: fontColors[mode],
    secondaryFontColor: secondaryFontColors[mode],
    backgroundColor: backgroundColors[mode],
    secondaryBackgroundColor: secondaryBackgroundColors[mode],
    borderColor: borderColors[mode],
    borderRadius: '3px',
    boxShadow: boxShadow[mode],
    breakpoints: {
      smallUp: `only screen`,
      smallOnly: `only screen and (max-width: 39.9375em)`,
      mediumUp: `only screen and (min-width: 40em)`,
      mediumOnly: `only screen and (min-width: 40em) and (max-width: 79.9375em)`,
      largeUp: `only screen and (min-width: 80em)`,
      largeOnly: `only screen and (min-width: 80em) and (max-width: 89.9375em)`,
      xLargeUp: `only screen and (min-width: 90em)`
    }
  }
});

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    letter-spacing: 0.03em;
    font-family: ${({ theme }) => theme.c7__ui.fontFamily};
    font-size:  ${({ theme }) => theme.c7__ui.fontSizeBase};
    color: ${({ theme }) => theme.c7__ui.fontColor};
    font-weight:  ${({ theme }) => theme.c7__ui.fontWeightBase};
    background-color: ${({ theme }) => theme.c7__ui.backgroundColor}; 
  }
`;
