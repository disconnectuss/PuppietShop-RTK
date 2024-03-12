import {RootState} from '../../app/store';

export const getProductState =
  () =>
  ({product: {products}}: RootState) =>
    products;
