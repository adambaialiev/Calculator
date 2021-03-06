const COLORS = {
  LIGHT_GREY: 'rgb(165, 165, 165)',
  LIGHT_GREY_OPACITY: 'rgb(216, 216, 216)',
  DARK_GREY: 'rgb(51, 51, 51)',
  DARK_GREY_OPACITY: 'rgb(115, 115, 115)',
  ORANGE: 'rgb(242, 162, 60)',
  ORANGE_OPACITY: 'rgb(243, 199, 148)',
  BLACK: 'black',
  WHITE: 'white',
};

export const FIRST_ROW_CELLS = [
  {
    text: 'C',
    backgroundColor: COLORS.LIGHT_GREY,
    backgroundOpacityColor: COLORS.LIGHT_GREY_OPACITY,
    textColor: COLORS.BLACK,
  },
  {
    text: '+/-',
    backgroundColor: COLORS.LIGHT_GREY,
    backgroundOpacityColor: COLORS.LIGHT_GREY_OPACITY,
    textColor: COLORS.BLACK,
  },
  {
    text: '%',
    backgroundColor: COLORS.LIGHT_GREY,
    backgroundOpacityColor: COLORS.LIGHT_GREY_OPACITY,
    textColor: COLORS.BLACK,
  },
  {
    text: '÷',
    backgroundColor: COLORS.ORANGE,
    backgroundOpacityColor: COLORS.ORANGE_OPACITY,
    textColor: COLORS.WHITE,
  },
];

export const SECOND_ROW_CELLS = [
  {
    text: '7',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '8',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '9',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '×',
    backgroundColor: COLORS.ORANGE,
    backgroundOpacityColor: COLORS.ORANGE_OPACITY,
    textColor: COLORS.WHITE,
  },
];

export const THIRD_ROW_CELLS = [
  {
    text: '4',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '5',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '6',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '-',
    backgroundColor: COLORS.ORANGE,
    backgroundOpacityColor: COLORS.ORANGE_OPACITY,
    textColor: COLORS.WHITE,
  },
];

export const FOURTH_ROW_CELLS = [
  {
    text: '1',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '2',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '3',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '+',
    backgroundColor: COLORS.ORANGE,
    backgroundOpacityColor: COLORS.ORANGE_OPACITY,
    textColor: COLORS.WHITE,
  },
];

export const FIFTH_ROW_CELLS = [
  {
    text: '0',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
    isDoubleSize: true,
  },
  {
    text: '.',
    backgroundColor: COLORS.DARK_GREY,
    backgroundOpacityColor: COLORS.DARK_GREY_OPACITY,
    textColor: COLORS.WHITE,
  },
  {
    text: '=',
    backgroundColor: COLORS.ORANGE,
    backgroundOpacityColor: COLORS.ORANGE_OPACITY,
    textColor: COLORS.WHITE,
  },
];
