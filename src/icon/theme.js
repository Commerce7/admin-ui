import { c7Colors, fontColors } from '../ui/theme';

const colors = {
  dark: {
    default: c7Colors.gray200,
    success: c7Colors.white,
    warning: c7Colors.white,
    error: c7Colors.white,
    info: c7Colors.white,
    text: fontColors.dark,
    white: c7Colors.white
  },
  light: {
    default: c7Colors.gray500,
    success: c7Colors.green300,
    warning: c7Colors.orange300,
    error: c7Colors.red300,
    info: c7Colors.blue400,
    text: fontColors.light,
    white: c7Colors.white
  }
};

const backgroundColors = {
  dark: {
    default: c7Colors.slate100,
    success: c7Colors.green300,
    warning: c7Colors.orange300,
    error: c7Colors.red300,
    info: c7Colors.blue300
  },
  light: {
    default: c7Colors.gray200,
    success: c7Colors.green100,
    warning: c7Colors.orange100,
    error: c7Colors.red100,
    info: c7Colors.blue100
  }
};

export { colors, backgroundColors };
