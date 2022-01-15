import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { colors } from '../../constants';

const width = Dimensions.get('screen').width - 40;

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBox: {
    width,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.NEUTRAL_100,
  },
  label: {
    color: colors.NEUTRAL_500,
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 5,
  },
  description: {
    color: colors.NEUTRAL_500,
    fontSize: 15,
    maxWidth: 200,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.BLUE_500,
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
});
