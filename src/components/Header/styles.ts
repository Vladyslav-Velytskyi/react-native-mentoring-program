import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 19,
    margin: 0,
    backgroundColor: colors.BLUE_500,
    color: colors.NEUTRAL_100,
  },
});
