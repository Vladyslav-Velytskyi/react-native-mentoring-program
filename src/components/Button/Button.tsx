import React from 'react';
import {
  Text,
  Pressable,
} from 'react-native';

import styles from './styles';

type Props = {
  onPress: () => void;
  title: string,
  type: 'red' | 'blue',
};

export const Button: React.FC<Props> = ({
  onPress,
  title,
  type,
}) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        ...styles[type],
      }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
