import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export default StyleSheet.create({
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
});
