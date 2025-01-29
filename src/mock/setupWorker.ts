import { setupWorker } from 'msw/browser';
import { mockProducts } from './data/products';
import { mockProductsCategory } from './data/productsCategory';

export const worker = setupWorker(
  ...[...mockProducts, ...mockProductsCategory]
);
