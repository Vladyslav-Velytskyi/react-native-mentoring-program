import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { Product } from '../../interfaces';

const SearchListItem: React.FC<{
  product: Product,
}> = ({ product }) => {
  const { id, attributes } = product;

  return (
    <View style={styles.productCard}>
      <View style={styles.productImageBox}>
        <Image
          style={styles.productImage}
          source={{ uri: `https://picsum.photos/id/${id}/100/100` }}
        />
      </View>
      <Text style={styles.productName}>{attributes.name}</Text>
      <Text style={styles.productPrice}>{attributes.display_price}</Text>
    </View>
  );
};

const itemWidth: number = (Dimensions.get('window').width - 60) / 2;

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: itemWidth,
    height: itemWidth,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    fontSize: 15,
    color: '#4a4a4a',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#000',
    shadowOpacity: 25,
    backgroundColor: '#fff',
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
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default SearchListItem;
