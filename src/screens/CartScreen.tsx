import {SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ProductList from '../components/products/ProductList';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
import Basket from '../components/cart/Basket';
import BottomBadge from '../components/cart/BottomBadge';
import DiscountBadge from '../components/cart/DiscountBadge';
import {Dimensions} from 'react-native';
import {useAppSelector} from '../app/hooks';
import {getCartState} from '../features/cart/cartSelector';
const {width, height} = Dimensions.get('screen');
const CartScreen = () => {
  const cart = useAppSelector(getCartState());
  return (
    <SafeAreaView style={{flex: 1}}>
      <DefaultNavbar type="Cart" />
      <ScrollView style={{height: height * 0.65}}>
        <Basket />
        {cart.length > 0 && <DiscountBadge />}
        <ProductList title="For You" />
      </ScrollView>
      {cart.length > 0 && <BottomBadge />}
    </SafeAreaView>
  );
};

export default CartScreen;

