import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const c7Colors = {
  white: '#FFFFFF',
  black: '#000000',

  yellow100: '#FFF9E6',
  yellow200: '#FED861',
  yellow300: '#BF9D36',

  green100: '#E4F2EF',
  green200: '#239C82',
  green300: '#1B7864',

  red100: '#FCEFF0',
  red200: '#DF5F5F',
  red300: '#B13434',

  orange100: '#FFEEDB',
  orange200: '#F79448',
  orange300: '#C96B13',

  purple100: '#ECE8FF',
  purple200: '#7764ED',
  purple300: '#5341B9',

  blue100: '#EBF6FE',
  blue200: '#DDEFFD',
  blue300: '#42ACF0',
  blue400: '#2490D6',
  blue500: '#0363A6',
  blue600: '#054483',

  slate100: '#414F58',
  slate200: '#293238',
  slate300: '#222a30',

  gray100: '#F8F8F8',
  gray200: '#F1F1F1',
  gray300: '#E0E0E0',
  gray400: '#D1D1D1',
  gray500: '#989EA4',
  gray600: '#71767D',
  gray700: '#585E64',
  gray800: '#484E54',
  gray900: '#20272B'
};

export const fontColors = {
  dark: c7Colors.gray200,
  light: c7Colors.slate300
};

const secondaryFontColors = {
  dark: c7Colors.gray500,
  light: c7Colors.gray600
};

const backgroundColors = {
  dark: c7Colors.slate300,
  light: c7Colors.white
};

const secondaryBackgroundColors = {
  dark: c7Colors.gray900,
  light: c7Colors.gray100
};

const borderColors = {
  dark: c7Colors.gray800,
  light: c7Colors.gray300
};

const boxShadow = {
  light: '2px 4px 6px rgba(0, 0, 0, 0.15)',
  dark: '2px 4px 6px rgba(0, 0, 0, 0.5)'
};

const linkColors = {
  light: c7Colors.blue500,
  dark: c7Colors.blue300
};

const errorColors = {
  light: c7Colors.red300,
  dark: c7Colors.red200
};

export const createTheme = (mode) => ({
  c7__ui: {
    mode,
    fontFamily: '"Nunito", sans-serif',
    fontSizeBase: '15px',
    fontSizeSmall: '14px',
    fontWeightBase: '400',
    fontWeightStrong: '600',
    fontColor: fontColors[mode],
    secondaryFontColor: secondaryFontColors[mode],
    linkColor: linkColors[mode],
    backgroundColor: backgroundColors[mode],
    secondaryBackgroundColor: secondaryBackgroundColors[mode],
    borderColor: borderColors[mode],
    errorColor: errorColors[mode],
    borderRadius: '3px',
    boxShadow: boxShadow[mode],
    colors: c7Colors,
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
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    padding: 0;
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
