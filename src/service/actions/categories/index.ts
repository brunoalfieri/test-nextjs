import { _serviceCategoryDelete } from './delete';
import { _serviceCategoriesList } from './list';
import { _serviceCategoryUpdate } from './update';

export enum ECategoryAction {
  'CATEGORY_LIST' = 'CATEGORY_LIST',
  'CATEGORY_DELETE' = 'CATEGORY_DELETE',
  'CATEGORY_UPDATE' = 'CATEGORY_UPDATE',
}

export const categoriesService = {
  list: _serviceCategoriesList,
  delete: _serviceCategoryDelete,
  update: _serviceCategoryUpdate,
};
