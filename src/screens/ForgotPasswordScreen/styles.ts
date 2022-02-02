import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.NEUTRAL_100,
  },
  inputsContainer: {
    marginTop: 50,
  },
  fullScreenButton: {
    marginBottom: 10,
    marginTop: 25,
  },
  description: {
    textAlign: 'center',
    marginTop: 60,
    color: colors.NEUTRAL_700,
  },
});
