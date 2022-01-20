const colors = {
  dark: {
    borderColor: {
      default: 'rgb(0, 103, 157)',
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
    fontColor: {
      default: 'rgb(1, 146, 208)',
      hover: 'rgb(63, 178, 238)',
      focus: 'rgb(63, 178, 238)',
      disabled: 'rgb(175, 175, 175)'
    }
  },
  light: {
    borderColor: {
      default: 'rgb(1, 146, 208)',
      hover: 'rgb(1, 146, 208)',
      focus: 'rgb(1, 146, 208)',
      disabled: 'rgb(175, 175, 175)'
    },
    backgroundColor: {
      default: 'white',
      hover: 'rgb(224, 224, 224)',
      focus: 'rgb(224, 224, 224)',
      disabled: 'white'
    },
    fontColor: {
      default: 'rgb(0, 103, 157)',
      hover: 'rgb(0, 103, 157)',
      focus: 'rgb(0, 103, 157)',
      disabled: 'rgb(175, 175, 175)'
    }
  }
};

const shadows = {
  dark: {
    default: '',
    hover: '',
    focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
    disabled: ''
  },
  light: {
    default: '',
    hover: '',
    focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
    disabled: ''
  }
};

export { colors, shadows };
