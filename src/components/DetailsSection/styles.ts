import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  detailsContainer: {
    marginBottom: 5,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.NEUTRAL_300,
  },
  containerTitle: {
    marginBottom: 4,
    fontSize: 25,
    fontWeight: '700',
    color: colors.NEUTRAL_700,
  },
});
