import { c7Colors } from '../ui/theme';

const colors = {
  dark: {
    borderColor: {
      default: c7Colors.gray600,
      hover: c7Colors.blue400,
      focus: c7Colors.blue400,
      disabled: c7Colors.gray800
    },
    backgroundColor: {
      default: c7Colors.slate300,
      hover: c7Colors.slate200,
      focus: c7Colors.slate200,
      disabled: c7Colors.slate300
    },
    fontColor: {
      defaultSmall: c7Colors.gray200,
      default: c7Colors.blue400,
      hover: c7Colors.blue400,
      focus: c7Colors.blue400,
      disabled: c7Colors.gray600
    }
  },
  light: {
    borderColor: {
      default: c7Colors.gray400,
      hover: c7Colors.blue400,
      focus: c7Colors.blue400,
      disabled: c7Colors.gray300
    },
    backgroundColor: {
      default: c7Colors.white,
      hover: c7Colors.gray200,
      focus: c7Colors.gray200,
      disabled: c7Colors.white
    },
    fontColor: {
      defaultSmall: c7Colors.slate300,
      default: c7Colors.blue500,
      hover: c7Colors.blue500,
      focus: c7Colors.blue500,
      disabled: c7Colors.gray500
    }
  }
};

const shadows = {
  dark: {
    default: '',
    hover: '',
    focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
    disabled: ''
  },
  light: {
    default: '',
    hover: '',
    focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
    disabled: ''
  }
};

export { colors, shadows };
