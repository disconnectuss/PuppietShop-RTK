import {RootState} from '../../app/store';

export const getCategoriesState =
  () =>
  ({category: {categories}}: RootState) =>
    categories;
