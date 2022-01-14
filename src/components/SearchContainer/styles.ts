import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export default StyleSheet.create({
  searchContainer: {
    flexDirection: 'row-reverse',
    height: 74,
    padding: 20,
    shadowColor: colors.NEUTRAL_1000,
    shadowOpacity: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    backgroundColor: colors.NEUTRAL_100,
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    right: 25,
  },
  searchInput: {
    flex: 1,
    height: 34,
    borderWidth: 1,
    borderColor: colors.NEUTRAL_500,
    borderRadius: 5,
    fontSize: 15,
    padding: 2,
    paddingHorizontal: 10,
  },
});
