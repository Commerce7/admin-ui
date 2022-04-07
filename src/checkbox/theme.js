import { c7Colors } from '../ui/theme';

const colors = {
  dark: {
    backgroundColor: {
      default: c7Colors.slate300,
      checked: c7Colors.blue400
    },
    borderColor: {
      default: c7Colors.gray700,
      disabled: c7Colors.gray500,
      hover: c7Colors.blue400,
      focus: c7Colors.blue400,
      checked: c7Colors.blue400
    },
    boxShadow: {
      focus: c7Colors.gray700
    }
  },
  light: {
    backgroundColor: {
      default: c7Colors.white,
      checked: c7Colors.blue400
    },
    borderColor: {
      default: c7Colors.gray500,
      disabled: c7Colors.gray500,
      hover: c7Colors.blue400,
      focus: c7Colors.blue400,
      checked: c7Colors.blue400
    },
    boxShadow: {
      focus: c7Colors.blue200
    }
  }
};

export { colors };
