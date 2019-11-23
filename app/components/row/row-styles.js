import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inner: { backgroundColor: 'rgb(160, 160, 162)', borderRadius: 35 },
  button: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'rgb(90, 90, 93)',
  },
  buttonText: { fontSize: 20, color: 'white' },
});
