import { c7Colors, fontColors } from '../ui/theme';

const colors = {
  dark: {
    default: c7Colors.gray200,
    success: c7Colors.green200,
    error: c7Colors.red300,
    text: fontColors.dark
  },
  light: {
    default: c7Colors.gray500,
    success: c7Colors.green200,
    error: c7Colors.red300,
    text: fontColors.light
  }
};

const backgroundColors = {
  dark: c7Colors.gray700,
  light: c7Colors.gray300
};

export { colors, backgroundColors };
