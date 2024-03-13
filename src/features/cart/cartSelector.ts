import {RootState} from '../../app/store';

export const getCartState =
  () =>
  ({cart: {cart}}: RootState) =>
    cart;

export const getCartTotal =
  () =>
  ({cart: {cart}}: RootState) => {
    let total = 0;
    if (cart.length > 0) {
      total = cart.reduce(
        (acc, item) =>
          acc +
          item.quantity *
            (item.price - (item.price * item.discountPercentage) / 100),
        0,
      );
    }
    return total.toFixed(2);
  };
