import { c7Colors } from '../ui/theme';

const tableColors = {
  light: {
    borderColor: c7Colors.gray300
  },
  dark: {
    borderColor: c7Colors.gray800
  }
};

const trColors = {
  light: {
    backgroundColor: {
      default: c7Colors.white,
      alt: c7Colors.gray100,
      hover: c7Colors.blue100
    },
    borderColor: c7Colors.gray300
  },
  dark: {
    backgroundColor: {
      default: c7Colors.slate300,
      alt: c7Colors.slate200,
      hover: c7Colors.slate100
    },
    borderColor: c7Colors.gray800
  }
};

const theadColors = {
  light: {
    backgroundColor: c7Colors.white
  },
  dark: {
    backgroundColor: c7Colors.slate300
  }
};

const thColors = {
  light: {
    color: c7Colors.slate300,
    borderColor: c7Colors.gray300
  },
  dark: {
    color: c7Colors.white,
    borderColor: c7Colors.gray800
  }
};

const tfootColors = {
  light: {
    backgroundColor: c7Colors.gray400
  },
  dark: {
    backgroundColor: c7Colors.gray900
  }
};

export { tableColors, trColors, theadColors, thColors, tfootColors };
