import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  button: {
    width: 125,
    height: 40,
    shadowColor: colors.NEUTRAL_1000,
    shadowOpacity: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  blue: {
    backgroundColor: colors.BLUE_500,
  },
  red: {
    backgroundColor: colors.RED,
  },
  buttonText: {
    color: colors.NEUTRAL_100,
  },
});
