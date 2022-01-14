import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import {
  ProductsScreen,
  ProductDetailsScreen,
} from './src/screens';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsScreen />
      {/*<ProductDetailsScreen id={1} />*/}
    </QueryClientProvider>
  );
};

export default App;
