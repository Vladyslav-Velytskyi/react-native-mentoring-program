import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

type Props = {
  label: string,
  onChange: (text: string) => void,
};

export const Input: React.FC<Props> = ({
  label,
  onChange,
}) => {

  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder="Text"
        onChangeText={onChange}
      />
    </View>
  );
};
