import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';
import { useProduct } from '../../queries';
import {
  DetailsSection,
  FullScreenButton,
  ImageCarousel,
} from '../../components';
import { Navigation } from '../../interfaces';

type Props = {
  route: {
    key: string,
    name: string,
    params: {
      id: string,
    },
  },
  navigation: Navigation,
};

export const ProductDetailsScreen: React.FC<Props> = ({
  route: {
    params: {
      id,
    },
  },
  navigation,
}) => {
  const {
    product,
    status,
  } = useProduct(id);

  if (status === 'loading' || !product) {
    return <Text>Loading</Text>;
  }

  const { attributes } = product.data;

  const onAdd = (): void => {
    //TODO add to cart functionality
    navigation.navigate('ProductAdded');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productDetailsContainer}>
          <ImageCarousel id={Number(id)} />

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
            onPress={onAdd}
            title="ADD TO CART"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
