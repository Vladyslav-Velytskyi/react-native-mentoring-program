export interface Product {
  id: number,
  attributes: {
    name: string,
    description: string,
    price: number,
    currency: string,
    display_price: string,
  },
};
