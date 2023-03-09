import { c7Colors } from '../ui/theme';

const colors = {
  light: {
    backgroundColor: c7Colors.gray100, //
    borderColor: c7Colors.gray300, //
    primaryLink: {
      fontColor: {
        default: c7Colors.slate300, //
        active: c7Colors.blue500, //
        hover: c7Colors.slate300
      },
      backgroundColor: {
        default: 'transparent',
        active: c7Colors.blue200, //
        hover: c7Colors.blue200 //
      },
      svgColor: {
        //
        default: c7Colors.gray500, //
        active: c7Colors.blue500, //
        hover: c7Colors.blue500 //
      }
    },
    secondaryLink: {
      fontColor: {
        default: c7Colors.slate300, //
        active: c7Colors.blue500, //
        hover: c7Colors.slate300
      },
      backgroundColor: {
        default: 'transparent',
        active: c7Colors.blue200, //
        hover: c7Colors.blue200 //
      }
    }
  },
  dark: {
    backgroundColor: c7Colors.gray900,
    borderColor: c7Colors.gray800,
    primaryLink: {
      fontColor: {
        default: c7Colors.gray200,
        active: c7Colors.gray200,
        hover: c7Colors.gray200
      },
      backgroundColor: {
        default: 'transparent',
        active: 'rgba(255,255,255,0.08)',
        hover: 'rgba(255,255,255,0.08)'
      },
      svgColor: {
        default: c7Colors.gray600,
        active: c7Colors.gray600,
        hover: c7Colors.gray600
      }
    },
    secondaryLink: {
      fontColor: {
        default: c7Colors.gray200,
        active: c7Colors.gray200,
        hover: c7Colors.gray200
      },
      backgroundColor: {
        default: 'transparent',
        active: 'rgba(255,255,255,0.08)',
        hover: 'rgba(255,255,255,0.08)'
      }
    }
  }
};

export { colors };
