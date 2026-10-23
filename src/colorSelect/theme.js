import { c7Colors } from '../ui/theme';

const colors = {
  dark: {
    ring: {
      inner: c7Colors.slate300,
      outer: c7Colors.blue400
    },
    checkmark: c7Colors.white,
    boxShadow: {
      focus: c7Colors.slate100
    }
  },
  light: {
    ring: {
      inner: c7Colors.white,
      outer: c7Colors.blue600
    },
    checkmark: c7Colors.white,
    boxShadow: {
      focus: c7Colors.blue100
    }
  }
};

export { colors };
