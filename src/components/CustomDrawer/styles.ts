import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: 270,
    left: 0,
    top: -20,
  },
  title: {
    color: colors.BLUE_500,
    fontSize: 40,
    fontWeight: 'bold',
  },
  menuSection: {
    borderTopColor: colors.NEUTRAL_300,
    borderTopWidth: 1,
    marginTop: 10,
    paddingBottom: 10,
  },
  menuMargin: {
    marginTop: 10,
  },
  menuSectionLabel: {
    color: colors.NEUTRAL_500,
    fontWeight: '700',
    fontSize: 20,
    left: 20,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    marginLeft: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  menuItemLeft: {
    left: -10,
  },
  menuItemLabel: {
    color: colors.NEUTRAL_700,
    fontSize: 15,
    marginLeft: 22,
  },
});
