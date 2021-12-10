const colors = {
  dark: {
    backgroundColor: {
      error: '#BC4545',
      info: '#0A3F5B',
      warning: '#BF9D36',
      default: '#3E474C'
    },
    borderBackground: {
      error: '#DF5F5F',
      info: '#00679D',
      warning: '#EAC75D',
      default: '#585E64'
    },
    iconColor: {
      error: '#FFF',
      info: '#FFF',
      warning: '#FFF',
      default: '#FFF'
    }
  },
  light: {
    backgroundColor: {
      error: '#FCEFF0',
      info: '#E6F4FA',
      warning: '#FCF7E8',
      default: '#F8F8F8'
    },
    borderBackground: {
      error: '#B13434',
      info: '#00679D',
      warning: '#EAC75D',
      default: '#D1D1D1'
    },
    iconColor: {
      error: '#B13434',
      info: '#00679D',
      warning: '#BC8C45',
      default: '#989EA4'
    }
  }
};

const sizes = {
  default: {
    padding: '18px 25px',
    borderWidth: '5px',
    iconMargin: '10px',
    iconSize: '16px',
    fontSize: '15px'
  },
  small: {
    padding: '9px 13px',
    borderWidth: '3px',
    iconMargin: '5px',
    iconSize: '14px',
    fontSize: '14px'
  }
};

export { colors, sizes };
