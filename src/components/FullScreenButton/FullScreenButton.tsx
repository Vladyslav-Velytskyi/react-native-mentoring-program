import React from 'react';
import {
  Text,
  Pressable,
  GestureResponderEvent,
} from 'react-native';

import styles from './styles';

interface FullScreenButtonPropsInterface {
  onPress: (event: GestureResponderEvent) => void,
  title: string,
};

export const FullScreenButton: React.FC<FullScreenButtonPropsInterface> = ({
  onPress,
  title,
}) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
