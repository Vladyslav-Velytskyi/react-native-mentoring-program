
import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  flatList: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    height: 74,
  },
  searchInput: {
    width: 335,
    height: 34,
    borderWidth: 1,
    borderColor: colors.NEUTRAL_1000,
  },
  title: {
    color: colors.NEUTRAL_100,
    fontSize: 20,
  },
});
