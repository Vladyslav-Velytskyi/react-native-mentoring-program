import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 55,
    paddingHorizontal: 19,
    margin: 0,
    backgroundColor: '#008ACE',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
