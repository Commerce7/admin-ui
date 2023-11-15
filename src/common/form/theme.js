import { c7Colors } from '../../ui/theme';

const colors = {
  dark: {
    color: {
      default: c7Colors.gray200
    },
    borderColor: {
      default: c7Colors.gray600,
      focus: c7Colors.blue300,
      error: c7Colors.red200
    },
    backgroundColor: {
      default: c7Colors.slate300
    },
    boxShadow: {
      default: 'transparent',
      focus: c7Colors.slate100
    }
  },
  light: {
    color: {
      default: c7Colors.slate300
    },
    borderColor: {
      default: c7Colors.gray400,
      focus: c7Colors.blue400,
      error: c7Colors.red300
    },
    backgroundColor: {
      default: c7Colors.white
    },
    boxShadow: {
      default: 'transparent',
      focus: c7Colors.blue100
    }
  }
};

const labelColors = {
  dark: {
    color: c7Colors.gray200
  },
  light: {
    color: c7Colors.slate300
  }
};

const requiredColors = {
  dark: {
    color: c7Colors.red200
  },
  light: {
    color: c7Colors.red300
  }
};

const errorColors = {
  dark: {
    color: c7Colors.red200
  },
  light: {
    color: c7Colors.red300
  }
};

const placeholderColors = {
  dark: {
    color: c7Colors.gray600
  },
  light: {
    color: c7Colors.gray500
  }
};

export { colors, labelColors, requiredColors, errorColors, placeholderColors };
