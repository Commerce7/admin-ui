const colors = {
  light: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(209,209,209)',
    fontColor: {
      default: 'rgb(41,50,56)',
      active: 'rgb(255, 255, 255)',
      inactive: 'rgb(153, 153, 153)',
      hover: 'rgb(255,255,255)',
      disabled: 'rgb(209,209,209)'
    }
  },
  dark: {
    backgroundColor: 'rgb(41,50,55)',
    borderColor: 'rgb(49,66,78)',
    fontColor: {
      default: 'rgb(241,241,241)',
      active: 'rgb(255, 255, 255)',
      inactive: 'rgb(152 158 164)',
      hover: 'rgb(255,255,255)',
      disabled: 'rgb(88,94,100)'
    }
  }
};

const dayColors = {
  light: {
    backgroundColor: {
      default: 'transparent',
      hover: 'rgb(1,146,208)',
      active: 'rgb(0,103,157)',
      today: 'rgb(208,228,243)'
    }
  },
  dark: {
    backgroundColor: {
      default: 'transparent',
      hover: 'rgb(49,66,78)',
      active: 'rgb(1,146,208)',
      today: 'rgb(62,71,76)'
    }
  }
};

export { colors, dayColors };
