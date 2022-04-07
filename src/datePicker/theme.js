import { c7Colors } from '../ui/theme';

const colors = {
  light: {
    backgroundColor: c7Colors.white,
    borderColor: c7Colors.gray400,
    fontColor: {
      default: c7Colors.slate300,
      active: c7Colors.white,
      inactive: c7Colors.gray500,
      hover: c7Colors.white,
      disabled: c7Colors.gray400
    }
  },
  dark: {
    backgroundColor: c7Colors.gray700,
    borderColor: c7Colors.slate200,
    fontColor: {
      default: c7Colors.gray200,
      active: c7Colors.white,
      inactive: c7Colors.gray500,
      hover: c7Colors.white,
      disabled: c7Colors.gray700
    }
  }
};

const dayColors = {
  light: {
    backgroundColor: {
      default: 'transparent',
      hover: c7Colors.blue400,
      active: c7Colors.blue500,
      today: c7Colors.blue200
    }
  },
  dark: {
    backgroundColor: {
      default: 'transparent',
      hover: c7Colors.slate200,
      active: c7Colors.blue400,
      today: c7Colors.gray800
    }
  }
};

export { colors, dayColors };
