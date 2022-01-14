import { useQuery } from 'react-query';

import { Product } from '../interfaces';

const useProduct = (id: number): {
  status: 'idle' | 'error' | 'loading' | 'success',
  product: { data: Product } | undefined,
} => {
  const fetchProduct = async (): Promise<{ data: Product }> => {
    const res = await fetch(`https://rn-mentoring.herokuapp.com/api/v2/storefront/products/${id}`);

    return res.json();
  };

  const {
    data,
    status,
  } = useQuery('product', fetchProduct);

  return ({
    status,
    product: data,
  });
};

export default useProduct;
