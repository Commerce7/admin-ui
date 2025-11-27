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

  violet100: '#F7EBFF',
  violet200: '#A83EF4',
  violet300: '#883DBF',

  blue100: '#EBF6FE',
  blue200: '#DDEFFD',
  blue300: '#42ACF0',
  blue400: '#2490D6',
  blue500: '#0363A6',
  blue600: '#054483',

  blueberry100: '#EBEFFF',
  blueberry200: '#1030AE',
  blueberry300: '#072080',

  slate100: '#292F3D',
  slate200: '#1D232F',
  slate300: '#161C27',
  slate400: '#121721',

  gray100: '#F6F7F9',
  gray200: '#EFF1F4',
  gray300: '#DDDFE4',
  gray400: '#CDD0D6',
  gray500: '#9DA3AE',
  gray600: '#6B7280',
  gray700: '#4D5361',
  gray750: '#3F4452',
  gray800: '#343946',
  gray900: '#2A2E37',
  gray950: '#26272C'
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
  dark: c7Colors.slate400,
  light: c7Colors.gray100
};

const borderColors = {
  dark: c7Colors.gray800,
  light: c7Colors.gray300
};

const boxShadow = {
  light: '0 1px 4px 0 rgba(0, 0, 0, 0.1)',
  dark: '0 1px 4px 0 rgba(0, 0, 0, 0.6)'
};

const linkColors = {
  light: c7Colors.blue500,
  dark: c7Colors.blue300
};

const errorColors = {
  light: c7Colors.red300,
  dark: c7Colors.red200
};

export interface Theme {
  c7__ui: {
    mode: 'light' | 'dark';
    fontFamily: string;
    fontSizeBase: string;
    fontSizeSmall: string;
    fontWeightBase: string;
    fontWeightStrong: string;
    fontWeightHeading: string;
    fontColor: string;
    secondaryFontColor: string;
    linkColor: string;
    backgroundColor: string;
    secondaryBackgroundColor: string;
    borderColor: string;
    errorColor: string;
    borderRadius: string;
    borderRadiusMedium: string;
    boxShadow: string;
    colors: typeof c7Colors;
    breakpoints: {
      smallUp: string;
      smallOnly: string;
      mediumUp: string;
      mediumOnly: string;
      largeUp: string;
      largeOnly: string;
      xLargeUp: string;
    };
  };
}

export const createTheme = (mode: 'light' | 'dark') => ({
  c7__ui: {
    mode,
    fontFamily: '"Inter", sans-serif',
    fontSizeBase: '15.5px',
    fontSizeSmall: '14.5px',
    fontWeightBase: '400',
    fontWeightStrong: '600',
    fontWeightHeading: '500',
    fontColor: fontColors[mode],
    secondaryFontColor: secondaryFontColors[mode],
    linkColor: linkColors[mode],
    backgroundColor: backgroundColors[mode],
    secondaryBackgroundColor: secondaryBackgroundColors[mode],
    borderColor: borderColors[mode],
    errorColor: errorColors[mode],
    borderRadius: '4px',
    borderRadiusMedium: '6px',
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

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
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
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
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
