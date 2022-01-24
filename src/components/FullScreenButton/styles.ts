import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { colors } from '../../constants';

const buttonWidth: number = Dimensions.get('window').width - 40;

export default StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: colors.BLUE_500,
    width: buttonWidth,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.NEUTRAL_1000,
    shadowOpacity: 25,
    elevation: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: colors.NEUTRAL_100,
  },
});
