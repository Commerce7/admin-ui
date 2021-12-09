const colors = {
  dark: {
    color: {
      default: 'rgb(241, 241, 241)'
    },
    borderColor: {
      default: 'rgb(88 94 100)',
      focus: 'rgb(63, 178, 238)',
      error: 'rgb(188, 69, 69)'
    },
    backgroundColor: {
      default: 'rgb(41, 50, 56)'
    },
    boxShadow: {
      default: 'transparent',
      focus: 'rgb(49, 66, 78)'
    }
  },
  light: {
    color: {
      default: 'rgb(41, 50, 56)'
    },
    borderColor: {
      default: 'rgb(209, 209, 209)',
      focus: 'rgb(1, 146, 208)',
      error: 'rgb(177, 52, 52)'
    },
    backgroundColor: {
      default: 'rgb(255, 255, 255)'
    },
    boxShadow: {
      default: 'transparent',
      focus: 'rgb(248, 248, 248)'
    }
  }
};

const labelColors = {
  dark: {
    color: 'rgb(241, 241, 241)'
  },
  light: {
    color: 'rgb(41, 50, 56)'
  }
};

const requiredColors = {
  dark: {
    color: 'rgb(188, 69, 69)'
  },
  light: {
    color: 'rgb(177, 52, 52)'
  }
};

const errorColors = {
  dark: {
    color: 'rgb(188, 69, 69)'
  },
  light: {
    color: 'rgb(177, 52, 52)'
  }
};

const placeholderColors = {
  dark: {
    color: 'rgb(106, 112, 119)'
  },
  light: {
    color: 'rgb(153, 153, 153) '
  }
};

export { colors, labelColors, requiredColors, errorColors, placeholderColors };
