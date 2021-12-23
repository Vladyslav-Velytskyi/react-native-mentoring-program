import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import {
  MainPage,
  ProductDetailsPage,
} from './src/pages';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
      {/*<ProductDetailsPage id={1} />*/}
    </QueryClientProvider>
  );
};

export default App;
