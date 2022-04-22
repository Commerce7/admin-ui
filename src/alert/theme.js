import { c7Colors } from '../ui/theme';

const colors = {
  dark: {
    backgroundColor: {
      error: c7Colors.red300,
      info: c7Colors.blue600,
      warning: c7Colors.yellow300,
      default: c7Colors.gray800,
      success: c7Colors.green300
    },
    borderBackground: {
      error: c7Colors.red200,
      info: c7Colors.blue500,
      warning: c7Colors.yellow200,
      default: c7Colors.gray700,
      success: c7Colors.green200
    },
    iconColor: {
      error: c7Colors.white,
      info: c7Colors.white,
      warning: c7Colors.white,
      default: c7Colors.white,
      success: c7Colors.white
    }
  },
  light: {
    backgroundColor: {
      error: c7Colors.red100,
      info: c7Colors.blue100,
      warning: '#FCF7E8',
      default: c7Colors.gray100,
      success: c7Colors.green100
    },
    borderBackground: {
      error: c7Colors.red300,
      info: c7Colors.blue500,
      warning: c7Colors.yellow200,
      default: c7Colors.gray400,
      success: c7Colors.green300
    },
    iconColor: {
      error: c7Colors.red300,
      info: c7Colors.blue500,
      warning: '#BC8C45',
      default: c7Colors.gray500,
      success: c7Colors.green300
    }
  }
};

const sizes = {
  default: {
    padding: '18px 25px',
    borderWidth: '5px',
    iconMargin: '10px',
    iconSize: '16px',
    fontSize: '15px'
  },
  small: {
    padding: '9px 13px',
    borderWidth: '3px',
    iconMargin: '5px',
    iconSize: '14px',
    fontSize: '14px'
  }
};

export { colors, sizes };
