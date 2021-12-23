import React, {
  useEffect,
  useState,
} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { useProducts } from '../../queries';
import {
  Header,
  SearchContainer,
  SearchListItem,
} from '../../components';

const MainPage: React.FC = () => {
  const {
    products,
    status,
    setPage,
  } = useProducts();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if(status !== 'loading') {
      setRefreshing(false);
    }
  });

  const onRefresh = () => {
    setRefreshing(true);
    setPage((old: number) => old + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <EvilIcons name="navicon" size={30} color="white" />
        <Text style={styles.title}>Ecommerce Store</Text>
        <EvilIcons name="cart" size={30} color="white" />
      </Header>
      <SearchContainer />
      {status === 'success' && (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={products.data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SearchListItem
              key={item.id}
              product={item}
            />
          )}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    height: 74,
  },
  searchInput: {
    width: 335,
    height: 34,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default MainPage;
