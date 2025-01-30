import { _serviceProductCreate } from './create';
import { _serviceProductsRead } from './read';
import { _serviceProductsTable } from './table';
import { _serviceProductUpdate } from './update';

export enum EProductAction {
  'PRODUCTS_TABLE' = 'PRODUCTS_TABLE',
  'PRODUCT_GET' = 'PRODUCT_GET',
  'PRODUCT_GET_MASS' = 'PRODUCT_GET_MASS',
  'PRODUCT_UPDATE' = 'PRODUCT_UPDATE',
  'PRODUCT_CREATE' = 'PRODUCT_CREATE',
  'PRODUCT_DELETE' = 'PRODUCT_DELETE',
}

export const productsService = {
  get: _serviceProductsRead,
  table: _serviceProductsTable,
  create: _serviceProductCreate,
  update: _serviceProductUpdate,
};
