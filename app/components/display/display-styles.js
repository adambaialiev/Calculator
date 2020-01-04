import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height * 0.3;

export default StyleSheet.create({
  container: {
    height: HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 50,
    color: 'white',
  },
});
