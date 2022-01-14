import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { colors } from '../../constants';

const imageContainerWidth: number = Dimensions.get('window').width - 40;

export default StyleSheet.create({
  imageContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 288,
    width: imageContainerWidth,
    marginBottom: 30,
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  imageBox: {
    width: imageContainerWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageListContainer: {
    width: 250,
    height: 250,
  },
  navDotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 47,
    height: 8,
  },
  navDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.NEUTRAL_300,
  },
});
