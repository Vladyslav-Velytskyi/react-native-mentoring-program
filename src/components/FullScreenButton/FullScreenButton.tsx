import React from 'react';
import {
  Text,
  Pressable,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';

import buttonStyles from './styles';

type Props = {
  onPress: (event: GestureResponderEvent) => void,
  title: string | React.ReactElement,
  style?: ViewStyle,
};

export const FullScreenButton: React.FC<Props> = ({
  onPress,
  title,
  style,
}) => {
  const buttonStyle = style
    ? {...buttonStyles.button, ...style}
    : buttonStyles.button; 

  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </Pressable>
  );
};
