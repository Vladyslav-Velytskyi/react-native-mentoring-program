
import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.NEUTRAL_100,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    color: colors.BLUE_500,
    fontSize: 40,
    fontWeight: 'bold',
    maxWidth: 250,
    textAlign: 'center',
  },
  inputsContainer: {
    marginTop: 50,
  },
  buttonText: {
    color: colors.NEUTRAL_100,
  },
  greyButton: {
    backgroundColor: colors.NEUTRAL_500,
    position: 'absolute',
    bottom: 30,
    left: 20,
    padding: 0,
  },
  leftLink: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 35,
  },
  fullScreenButton: {
    marginBottom: 10,
  },
});
