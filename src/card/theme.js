import { c7Colors } from '../ui/theme';

const colors = {
  dark: {
    backgroundColor: {
      default: c7Colors.slate200,
      white: c7Colors.slate200
    },
    borderColor: c7Colors.gray700,
    boxShadow: 'rgba(0, 0, 0, 0.5)0 1px 5px'
  },
  light: {
    backgroundColor: {
      default: c7Colors.gray100,
      white: c7Colors.white
    },
    borderColor: c7Colors.gray400,
    boxShadow: 'rgba(0, 0, 0, 0.15) 0 1px 5px'
  }
};

export { colors };
