import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';
import { useProduct } from '../../queries';
import {
  DetailsSection,
  FullScreenButton,
  Header,
  ImageCarousel,
} from '../../components';

interface ProductDetailsScreenPropsInterface {
  id: number,
};

export const ProductDetailsScreen: React.FC<ProductDetailsScreenPropsInterface> = ({
  id,
}) => {
  const {
    product,
    status,
  } = useProduct(id);

  if (status === 'loading' || !product) {
    return <Text>Loading</Text>;
  }

  const { attributes } = product.data;

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.iconContainer}>
          <Image source={require('../../assets/icon-arrow.png')} />
        </View>
        <Image
          source={require('../../assets/icon-heart.png')}
          style={styles.iconHeart}
        />
        <Image source={require('../../assets/icon-cart.png')} />
      </Header>

      <ScrollView>
        <View style={styles.productDetailsContainer}>
          <ImageCarousel id={id} />

          <View style={styles.productMainInfo}>
            <Text style={styles.productName}>{attributes.name}</Text>
            <Text style={styles.productPrice}>{attributes.display_price}</Text>
          </View>

          <DetailsSection
            title="Select Color"
            content={(
              <TouchableOpacity style={styles.colorButton}>
                <Text style={styles.colorButtonText}>Blue</Text>
              </TouchableOpacity>
            )}
          />

          <DetailsSection
            title="Description"
            content={<Text>{attributes.description}</Text>}
          />

          <FullScreenButton
            onPress={(): void => {}}
            title="ADD TO CART"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
