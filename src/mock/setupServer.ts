import { setupServer } from 'msw/node';
import { mockProducts } from './data/products';
import { mockProductsCategory } from './data/productsCategory';

export const server = setupServer(
  ...[...mockProducts, ...mockProductsCategory]
);
