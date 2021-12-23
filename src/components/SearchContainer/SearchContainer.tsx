import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SearchContainer = () => {
  return (
    <View style={styles.searchContainer}>
      <EvilIcons style={styles.searchIcon} name="search" size={30} color="grey" />
      <TextInput style={styles.searchInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row-reverse',
    height: 74,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    right: 25,
  },
  searchInput: {
    flex: 1,
    height: 34,
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 5,
  },
});

export default SearchContainer;
