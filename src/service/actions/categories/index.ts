import { _serviceCategoriesList } from './list';

export enum ECategoryAction {
  'CATEGORY_LIST' = 'CATEGORY_LIST',
}

export const categoriesService = {
  list: _serviceCategoriesList,
};
