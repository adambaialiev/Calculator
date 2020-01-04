import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const INTERSPACE = 16;

const BUTTON_SIZE = (SCREEN_WIDTH - INTERSPACE * 5) / 4;
const DOUBLED_BUTTON_SIZE = BUTTON_SIZE * 2 + INTERSPACE;
const BORDER_RADIUS = BUTTON_SIZE / 2;

export default StyleSheet.create({
  wrapper: {
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperIfDoubledButton: {
    alignItems: 'flex-start',
  },
  button: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    backgroundColor: 'rgb(90, 90, 93)',
  },
  doubledButton: {
    width: DOUBLED_BUTTON_SIZE,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: '500',
    position: 'absolute',
  },
  buttonTextIfDoubledButton: {
    marginLeft: 31,
  },
});
