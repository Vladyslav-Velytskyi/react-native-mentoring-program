import React from 'react';
import {
  Text,
  Pressable,
  GestureResponderEvent,
  TextStyle,
} from "react-native";

import styles from './styles';

type Props = {
  text: string,
  onPress: (e: GestureResponderEvent) => void,
  style?: TextStyle,
};

export const Link: React.FC<Props> = ({
  text,
  onPress,
  style,
}) => {
  return (
    <Pressable
      style={{...styles.link, ...style}}
      onPress={onPress}
    >
      <Text style={styles.linkText}>{text}</Text>
    </Pressable>
  );
};
