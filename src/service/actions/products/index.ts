import { _serviceProductsTable } from './table';

export enum EProductAction {
  'PRODUCTS_TABLE' = 'PRODUCTS_TABLE',
  'PRODUCT_GET' = 'PRODUCT_GET',
  'PRODUCT_GET_MASS' = 'PRODUCT_GET_MASS',
  'PRODUCT_UPDATE' = 'PRODUCT_UPDATE',
  'PRODUCT_CREATE' = 'PRODUCT_CREATE',
  'PRODUCT_DELETE' = 'PRODUCT_DELETE',
}

export const productsService = {
  table: _serviceProductsTable,
};
