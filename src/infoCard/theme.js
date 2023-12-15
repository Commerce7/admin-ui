import { c7Colors } from '../ui/theme';

const colors = {
  light: {
    backgroundColor: {
      default: c7Colors.white,
      info: c7Colors.blue500,
      error: c7Colors.red300,
      warning: c7Colors.yellow200,
      success: c7Colors.green200
    },
    borderColor: {
      default: c7Colors.gray300,
      info: c7Colors.gray300,
      error: c7Colors.gray300,
      warning: c7Colors.gray300,
      success: c7Colors.gray300
    },
    iconBackgroundColor: {
      default: 'rgba(0, 0, 0, 0.07)',
      info: 'rgba(255, 255, 255, 0.1)',
      error: 'rgba(255, 255, 255, 0.1)',
      warning: 'rgba(0, 0, 0, 0.07)',
      success: 'rgba(255, 255, 255, 0.1)'
    },
    iconFill: {
      default: 'rgba(0, 0, 0, 0.65)',
      info: 'rgba(255, 255, 255, 0.65)',
      error: 'rgba(255, 255, 255, 0.65)',
      warning: 'rgba(0, 0, 0, 0.65)',
      success: 'rgba(255, 255, 255, 0.65)'
    },
    labelColor: {
      default: 'rgba(0, 0, 0, 0.5)',
      info: 'rgba(255, 255, 255, 0.6)',
      error: 'rgba(255, 255, 255, 0.6)',
      warning: 'rgba(0, 0, 0, 0.5)',
      success: 'rgba(255, 255, 255, 0.6)'
    },
    fontColor: {
      default: c7Colors.slate300,
      info: c7Colors.white,
      error: c7Colors.white,
      warning: c7Colors.slate300,
      success: c7Colors.white
    }
  },
  dark: {
    backgroundColor: {
      default: c7Colors.slate200,
      info: c7Colors.blue600,
      error: c7Colors.red300,
      warning: c7Colors.yellow200,
      success: c7Colors.green200
    },
    borderColor: {
      default: c7Colors.gray700,
      info: c7Colors.gray700,
      error: c7Colors.gray700,
      warning: c7Colors.gray700,
      success: c7Colors.gray700
    },
    iconBackgroundColor: {
      default: 'rgba(255, 255, 255, 0.1)',
      info: 'rgba(255, 255, 255, 0.1)',
      error: 'rgba(255, 255, 255, 0.1)',
      warning: 'rgba(0, 0, 0, 0.1)',
      success: 'rgba(255, 255, 255, 0.1)'
    },
    iconFill: {
      default: 'rgba(255, 255, 255, 0.65)',
      info: 'rgba(255, 255, 255, 0.65)',
      error: 'rgba(255, 255, 255, 0.65)',
      warning: 'rgba(0, 0, 0, 0.65)',
      success: 'rgba(255, 255, 255, 0.65)'
    },
    labelColor: {
      default: 'rgba(255, 255, 255, 0.6)',
      info: 'rgba(255, 255, 255, 0.6)',
      error: 'rgba(255, 255, 255, 0.6)',
      warning: 'rgba(0, 0, 0, 0.5)',
      success: 'rgba(255, 255, 255, 0.6)'
    },
    fontColor: {
      default: c7Colors.white,
      info: c7Colors.white,
      error: c7Colors.white,
      warning: c7Colors.slate300,
      success: c7Colors.white
    }
  }
};

export { colors };
