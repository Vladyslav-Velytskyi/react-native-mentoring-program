import React, {
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import { Product } from '../interfaces';

const useProducts = (): {
  status: 'idle' | 'error' | 'loading' | 'success',
  products: { data: Product[] } | undefined,
  setPage: Dispatch<SetStateAction<number>>,
} => {
  const [page, setPage] = useState(1);

  const fetchProducts = async (currentPage: number): Promise<{ data: Product[] }> => {
    const res = await fetch(`https://rn-mentoring.herokuapp.com/api/v2/storefront/products?page=${currentPage}`);

    return res.json();
  };

  const {
    data,
    status,
  } = useQuery(['products', page], () => fetchProducts(page), { keepPreviousData: true });

  return ({
    products: data,
    status,
    setPage,
  });
};

export default useProducts;
