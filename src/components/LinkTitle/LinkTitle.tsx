import React from 'react';
import {
  Text,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { Navigation } from '../../interfaces';

export const LinkTitle: React.FC = () => {
  const navigation: Navigation = useNavigation()
  const onPressTitle = (): void => { navigation.navigate('Home') };

  return (
    <Pressable
      style={styles.titleContainer}
      onPress={onPressTitle}
    >
      <Text style={styles.title}>Ecommerce Store</Text>
    </Pressable>
  );
};
