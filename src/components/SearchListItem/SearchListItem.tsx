import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import styles from './styles';
import { Product } from '../../interfaces';

interface SearchListItemPropsInterface {
  product: Product,
};

export const SearchListItem: React.FC<SearchListItemPropsInterface> = ({
  product,
}) => {
  const {
    id,
    attributes: {
      price,
      name,
      display_price,
    },
  } = product;

  const discount: number = Math.floor(Math.random() * 25);
  const discountPrice: number = Math.round(price - price / 100 * discount);

  return (
    <View style={styles.productCard}>
      <View style={styles.productImageBox}>
        <Image
          style={styles.productImage}
          source={{ uri: `https://picsum.photos/id/${id}/100/100` }}
        />
      </View>
      <Text style={styles.productName}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={[styles.productPrice, styles.priceText]}>{display_price}</Text>
        <Text style={[styles.discountPrice, styles.priceText]}>${discountPrice}</Text>
        <Text style={[styles.discount, styles.priceText]}>{discount}% Off</Text>
      </View>
    </View>
  );
};
