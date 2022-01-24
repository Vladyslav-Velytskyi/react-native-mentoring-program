import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  productDetailsContainer: {
    padding: 20, 
    paddingTop: 40,
  },
  productMainInfo: {
    height: 70,
    marginBottom: 5,
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  productName: {
    paddingBottom: 7,
    fontSize: 20,
    fontWeight: '400',
    color: colors.NEUTRAL_700,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
  },
  imageBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  colorButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 4,
    padding: 4,
    width: 50,
    height: 30,
    borderRadius: 4,
    backgroundColor: colors.NEUTRAL_100,
  },
  colorButtonText: {
    color: colors.NEUTRAL_700,
  },
  iconContainer: {
    flex: 1,
  },
  iconHeart: {
    marginRight: 20,
  },
});
