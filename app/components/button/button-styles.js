import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const INTERSPACE = 8;

const BUTTON_SIZE = (SCREEN_WIDTH - INTERSPACE * 5) / 4;
const DOUBLED_BUTTON_SIZE = (SCREEN_WIDTH - INTERSPACE * 4) / 3;
const BORDER_RADIUS = BUTTON_SIZE / 2;

const button = {
  height: BUTTON_SIZE,
  width: BUTTON_SIZE,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: BORDER_RADIUS,
  backgroundColor: 'rgb(90, 90, 93)',
};

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(160, 160, 162)',
    borderRadius: BORDER_RADIUS,
  },
  button,
  doubledButton: {
    ...button,
    width: DOUBLED_BUTTON_SIZE,
  },
  buttonText: { fontSize: 20 },
});
