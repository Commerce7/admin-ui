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
      backgroundColor: {
        default: 'rgb(1, 146, 208)',
        hover: 'rgb(63, 178, 238)',
        focus: 'rgb(1, 146, 208)',
        disabled: 'rgb(175, 175, 175)'
      },
      borderColor: {
        default: 'rgb(1, 146, 208)',
        hover: 'rgb(63, 178, 238)',
        focus: 'rgb(63, 178, 238)',
        disabled: 'rgb(175, 175, 175)'
      }
    },
    secondary: {
      fontColor: {
        default: 'rgb(1, 146, 208)',
        hover: 'rgb(63, 178, 238)',
        focus: 'rgb(63, 178, 238)',
        disabled: 'rgb(175, 175, 175)'
      },
      backgroundColor: {
        default: 'rgb(41, 50, 56)',
        hover: 'rgb(49, 66, 78)',
        focus: 'rgb(49, 66, 78)',
        disabled: 'rgb(41, 50, 56)'
      },
      borderColor: {
        default: 'rgb(0, 103, 157)',
        hover: 'rgb(63, 178, 238)',
        focus: 'rgb(63, 178, 238)',
        disabled: 'rgb(175, 175, 175)'
      }
    },
    text: {
      fontColor: {
        default: 'rgb(175, 175, 175)',
        hover: 'rgb(175, 175, 175)',
        focus: 'rgb(175, 175, 175)',
        disabled: 'rgb(175, 175, 175)'
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
        default: 'rgb(1, 146, 208)',
        hover: 'rgb(1, 146, 208)',
        focus: 'rgb(1, 146, 208)',
        disabled: 'rgb(175, 175, 175)'
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
      backgroundColor: {
        default: 'rgb(1, 146, 208)',
        hover: 'rgb(0, 103, 157)',
        focus: 'rgb(1, 146, 208)',
        disabled: 'rgb(175, 175, 175)'
      },
      borderColor: {
        default: 'rgb(1, 146, 208)',
        hover: 'rgb(0, 103, 157)',
        focus: 'rgb(0, 103, 157)',
        disabled: 'rgb(175, 175, 175)'
      }
    },
    secondary: {
      fontColor: {
        default: 'rgb(0, 103, 157)',
        hover: 'rgb(0, 103, 157)',
        focus: 'rgb(0, 103, 157)',
        disabled: 'rgb(175, 175, 175)'
      },
      backgroundColor: {
        default: 'white',
        hover: 'rgb(224, 224, 224)',
        focus: 'rgb(224, 224, 224)',
        disabled: 'white'
      },
      borderColor: {
        default: 'rgb(1, 146, 208)',
        hover: 'rgb(1, 146, 208)',
        focus: 'rgb(1, 146, 208)',
        disabled: 'rgb(175, 175, 175)'
      }
    },
    text: {
      fontColor: {
        default: 'rgb(45, 48, 62)',
        hover: 'rgb(45, 48, 62)',
        focus: 'rgb(45, 48, 62)',
        disabled: 'rgb(175, 175, 175)'
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
        default: 'rgb(0, 103, 157)',
        hover: 'rgb(0, 103, 157)',
        focus: 'rgb(0, 103, 157)',
        disabled: 'rgb(175, 175, 175)'
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
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
      disabled: ''
    },
    secondary: {
      default: '',
      hover: '',
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
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
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
      disabled: ''
    },
    secondary: {
      default: '',
      hover: '',
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
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
