import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

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

const linkColors = {
  light: 'rgb(0, 103, 157)',
  dark: 'rgb(80, 164, 252)'
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
    linkColor: linkColors[mode],
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
  ${styledNormalize}

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html, body {
    font-size:  ${({ theme }) => theme.c7__ui.fontSizeBase};
    font-family: ${({ theme }) => theme.c7__ui.fontFamily};
    font-weight:  ${({ theme }) => theme.c7__ui.fontWeightBase};
  }
  body {
    margin: 0;
    padding: 0;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.c7__ui.fontColor};
    background-color: ${({ theme }) => theme.c7__ui.backgroundColor}; 
  }
  a {
    color: ${({ theme }) => theme.c7__ui.linkColor};
    text-decoration: none;
  }
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

`;
