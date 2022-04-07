import { c7Colors } from '../../ui/theme';

const colors = {
  dark: {
    fontColor: {
      default: c7Colors.gray200,
      hover: c7Colors.gray500,
      focus: c7Colors.gray500,
      disabled: c7Colors.gray500
    }
  },
  light: {
    fontColor: {
      default: c7Colors.slate300,
      hover: c7Colors.gray700,
      focus: c7Colors.gray700,
      disabled: c7Colors.gray400
    }
  }
};

const dropdownColors = {
  dark: {
    backgroundColor: {
      default: c7Colors.slate300
    },
    borderColor: {
      default: c7Colors.gray700
    },
    shadowColor: {
      default: 'rgba(0, 0, 0, .5)'
    }
  },
  light: {
    backgroundColor: {
      default: c7Colors.white
    },
    borderColor: {
      default: c7Colors.gray300
    },
    shadowColor: {
      default: 'rgba(0, 0, 0, .15)'
    }
  }
};

const dropdownButtonColors = {
  dark: {
    backgroundColor: {
      default: 'transparent',
      hover: c7Colors.slate200,
      focus: c7Colors.slate200
    }
  },
  light: {
    backgroundColor: {
      default: 'transparent',
      hover: c7Colors.gray100,
      focus: c7Colors.gray100
    }
  }
};

export { colors, dropdownColors, dropdownButtonColors };
