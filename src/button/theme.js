import { c7Colors } from '../ui/theme';

const sizes = {
  small: {
    padding: '8px 12px',
    height: '34px'
  },
  default: {
    padding: '0 20px',
    height: '46px'
  }
};

const colors = {
  dark: {
    primary: {
      fontColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      iconColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      backgroundColor: {
        default: c7Colors.blue400,
        hover: c7Colors.blue300,
        focus: c7Colors.blue400,
        disabled: c7Colors.gray500
      },
      borderColor: {
        default: c7Colors.blue400,
        hover: c7Colors.blue300,
        focus: c7Colors.blue300,
        disabled: c7Colors.gray500
      }
    },
    secondary: {
      fontColor: {
        default: c7Colors.blue400,
        hover: c7Colors.blue300,
        focus: c7Colors.blue300,
        disabled: c7Colors.gray500
      },
      iconColor: {
        default: c7Colors.blue400,
        hover: c7Colors.blue400,
        focus: c7Colors.blue300,
        disabled: c7Colors.gray500
      },
      backgroundColor: {
        default: c7Colors.slate300,
        hover: c7Colors.slate200,
        focus: c7Colors.slate200,
        disabled: c7Colors.slate300
      },
      borderColor: {
        default: c7Colors.blue500,
        hover: c7Colors.blue300,
        focus: c7Colors.blue300,
        disabled: c7Colors.gray500
      }
    },
    text: {
      fontColor: {
        default: c7Colors.gray500,
        hover: c7Colors.gray500,
        focus: c7Colors.gray500,
        disabled: c7Colors.gray500
      },
      iconColor: {
        default: c7Colors.gray500,
        hover: 'white',
        focus: 'white',
        disabled: c7Colors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    },
    link: {
      fontColor: {
        default: c7Colors.blue300,
        hover: c7Colors.blue300,
        focus: c7Colors.blue300,
        disabled: c7Colors.gray500
      },
      iconColor: {
        default: c7Colors.blue300,
        hover: c7Colors.blue300,
        focus: c7Colors.blue300,
        disabled: c7Colors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    }
  },
  light: {
    primary: {
      fontColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      iconColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      backgroundColor: {
        default: c7Colors.blue400,
        hover: c7Colors.blue500,
        focus: c7Colors.blue400,
        disabled: c7Colors.gray500
      },
      borderColor: {
        default: c7Colors.blue400,
        hover: c7Colors.blue500,
        focus: c7Colors.blue500,
        disabled: c7Colors.gray500
      }
    },
    secondary: {
      fontColor: {
        default: c7Colors.blue500,
        hover: c7Colors.blue500,
        focus: c7Colors.blue500,
        disabled: c7Colors.gray500
      },
      iconColor: {
        default: c7Colors.blue500,
        hover: c7Colors.blue500,
        focus: c7Colors.blue500,
        disabled: c7Colors.gray500
      },
      backgroundColor: {
        default: 'white',
        hover: c7Colors.gray300,
        focus: c7Colors.gray300,
        disabled: 'white'
      },
      borderColor: {
        default: c7Colors.blue400,
        hover: c7Colors.blue400,
        focus: c7Colors.blue400,
        disabled: c7Colors.gray500
      }
    },
    text: {
      fontColor: {
        default: c7Colors.gray700,
        hover: c7Colors.gray700,
        focus: c7Colors.gray700,
        disabled: c7Colors.gray500
      },
      iconColor: {
        default: c7Colors.gray500,
        hover: c7Colors.gray700,
        focus: c7Colors.gray700,
        disabled: c7Colors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    },
    link: {
      fontColor: {
        default: c7Colors.blue500,
        hover: c7Colors.blue500,
        focus: c7Colors.blue500,
        disabled: c7Colors.gray500
      },
      iconColor: {
        default: c7Colors.blue500,
        hover: c7Colors.blue500,
        focus: c7Colors.blue500,
        disabled: c7Colors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    }
  }
};

const shadows = {
  dark: {
    primary: {
      default: '',
      hover: '',
      focus: `0 0 0 5px ${c7Colors.slate100}`,
      disabled: ''
    },
    secondary: {
      default: '',
      hover: '',
      focus: `0 0 0 5px ${c7Colors.slate100}`,
      disabled: ''
    },
    text: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    },
    link: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    }
  },
  light: {
    primary: {
      default: '',
      hover: '',
      focus: `0 0 0 5px ${c7Colors.blue200}`,
      disabled: ''
    },
    secondary: {
      default: '',
      hover: '',
      focus: `0 0 0 5px ${c7Colors.blue200}`,
      disabled: ''
    },
    text: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    },
    link: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    }
  }
};

export { sizes, colors, shadows };
