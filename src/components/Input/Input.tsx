import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  TextInput,
  View,
  Animated,
  Easing,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles';

type Props = {
  label: string,
  onChange: (text: string) => void,
  value: string,
};

export const Input: React.FC<Props> = ({
  label,
  onChange,
  value,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null)
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start()
  }, [focusAnim, isFocused, value]);

  return (
    <View>
      
        <Animated.View
          style={[
            styles.labelContainer,
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.75],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 2],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 10],
                  }),
                },
              ],
            },
          ]}
          >
          <Text style={styles.inputLabel}>{label}</Text>
        </Animated.View>
      
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        onBlur={(): void => { setIsFocused(false) }}
        onFocus={(): void => { setIsFocused(true) }}
      />
    </View>
  );
};
