import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
} from "react-native";

import { FullScreenButton } from '..';
import styles from './styles';
import { Navigation } from '../../interfaces';

export const CartScreen: React.FC<Navigation> = (navigation) => {
  const onPressShopNow = (): void => { navigation.navigate('Home') };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/emptyBox.png')} />
      </View>  
      <Text style={styles.title}>Your Cart is Empty!</Text>
      <Text style={styles.description}>Add product to your cart now</Text>
      <FullScreenButton
        title='SHOP NOW'
        onPress={onPressShopNow}
      />
    </SafeAreaView>
  )
};
