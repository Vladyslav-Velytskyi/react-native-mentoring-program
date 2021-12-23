import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { useProduct } from '../../queries';
import {
  Header,
  ImageCarousel,
} from '../../components';

const ProductDetailsPage: React.FC<{ id: number }> = ({ id }) => {
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
        <EvilIcons
          name="arrow-left"
          size={30}
          color="white"
          style={{ flex: 1 }}
        />
        <EvilIcons
          name="heart"
          size={30}
          color="white"
          style={{ marginRight: 20 }}
        /> 
        <EvilIcons
          name="cart"
          size={30}
          color="white"
        /> 
      </Header>

      <View style={styles.productDetailsContainer}>
        <ImageCarousel id={id} />

        <View style={styles.productMainInfo}>
          <Text style={styles.productName}>{attributes.name}</Text>
          <Text style={styles.productPrice}>{attributes.display_price}</Text>
        </View>
        
        <View style={styles.selectColorContainer}>
          <Text style={styles.containerTitle}>Select Color</Text>
          <TouchableOpacity style={styles.colorButton}>
            <Text style={styles.colorButtonText}>Blue</Text>
          </TouchableOpacity>
        </View>
          
        <View>
          <Text style={styles.containerTitle}>Description</Text>
          <Text>{attributes.description}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const addToCartButtonWidth: number = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productDetailsContainer: {
    padding: 20, 
    paddingTop: 40,
  },
  productMainInfo: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: 5,
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  productName: {
    fontSize: 20,
    fontWeight: '400',
    color: '#4a4a4a',
    paddingBottom: 7,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
  },
  imageBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    backgroundColor: '#C3C3C3',
  },
  selectColorContainer: {
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: 5,
  },
  containerTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#4a4a4a',
    marginBottom: 4,
  },
  colorButton: {
    width: 50,
    height: 30,
    backgroundColor: '#F4F4F4',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 4,
    borderRadius: 4,
    marginTop: 4,
  },
  colorButtonText: {
    color: '#4a4a4a',
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    height: 40,
    backgroundColor: '#008ACE',
    width: addToCartButtonWidth,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#000',
    shadowOpacity: 25,
    elevation: 4,
    borderRadius: 4,
  },
  addToCartButtonText: {
    color: '#fff',
  },
});

export default ProductDetailsPage;
