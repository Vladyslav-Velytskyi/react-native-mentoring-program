import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface HeaderPropsInterface {
  children: React.ReactNode,
};

export const Header: React.FC<HeaderPropsInterface> = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}
    </View>
  );
};
