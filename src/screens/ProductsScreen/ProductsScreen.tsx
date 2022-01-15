import React, {
  useEffect,
  useState,
} from 'react';
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
} from 'react-native';

import styles from './styles';
import { useProducts } from '../../queries';
import { Product } from '../../interfaces';
import {
  SearchContainer,
  SearchListItem,
} from '../../components';

export const ProductsScreen: React.FC = () => {
  const {
    products,
    status,
    setPage,
  } = useProducts();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect((): void => {
    if(status !== 'loading') {
      setRefreshing(false);
    }
  });

  const onRefresh = (): void => {
    setRefreshing(true);
    setPage((old: number): number => old + 1);
  };

  const keyExtractor = (item: Product): string => `${item.id}`;

  const renderItem = ({ item }: { item: Product }): React.ReactElement => (
    <SearchListItem
      key={item.id}
      product={item}
    />
  );

  const refreshControl: React.ReactElement = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchContainer />
      {status === 'success' && products?.data &&  (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={products.data}
          numColumns={2}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshControl={refreshControl}
        />
      )}
    </SafeAreaView>
  );
};
