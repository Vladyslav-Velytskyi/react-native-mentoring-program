import React, { useState } from 'react';
import {
  Image,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';

import styles from './styles';

export const SearchContainer: React.FC = () => {
  const [iconIsVisible, setIconIsVisible] = useState<boolean>(true);

  const onFocus = (): void => {
    setIconIsVisible(false);
  };

  const onEndEditing = (e: NativeSyntheticEvent<TextInputEndEditingEventData>): void => {
    if (!e.nativeEvent.text) {
      setIconIsVisible(true);
    }
  };

  return (
    <View style={styles.searchContainer}>
      {iconIsVisible && (
        <Image
          source={require('../../assets/icon-search.png')}
          style={styles.searchIcon}
        />
      )}
      <TextInput
        style={styles.searchInput}
        onFocus={onFocus}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};
