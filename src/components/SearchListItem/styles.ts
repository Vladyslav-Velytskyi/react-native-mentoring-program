import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { colors } from '../../constants';

const size: number = (Dimensions.get('window').width - 60) / 2;

export default StyleSheet.create({
  productCard: {
    justifyContent: 'space-around',
    width: size,
    height: size,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    fontSize: 15,
    color: colors.NEUTRAL_700,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.NEUTRAL_1000,
    shadowOpacity: 25,
    backgroundColor: colors.NEUTRAL_100,
    elevation: 4,
  },
  productImageBox: {
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontWeight: '400',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  priceText: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  productPrice: {
    color: colors.NEUTRAL_700,
  },
  discountPrice: {
    color: colors.NEUTRAL_500,
    textDecorationLine: 'line-through',
  },
  discount: {
    color: colors.BLUE_300,
  },
});