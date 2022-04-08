import { c7Colors } from '../ui/theme';

const colors = {
  dark: {
    borderColor: c7Colors.gray700,
    backgroundColor: c7Colors.slate300,
    borderBackground: {
      default: c7Colors.gray400,
      success: c7Colors.green200,
      error: c7Colors.red300,
      warning: c7Colors.yellow200,
      info: c7Colors.blue500
    }
  },
  light: {
    borderColor: c7Colors.gray400,
    backgroundColor: c7Colors.white,
    borderBackground: {
      default: c7Colors.gray400,
      success: c7Colors.green200,
      error: c7Colors.red300,
      warning: c7Colors.yellow200,
      info: c7Colors.blue500
    }
  }
};

export { colors };
