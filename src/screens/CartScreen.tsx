import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductList from '../components/products/ProductList';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
import Basket from '../components/cart/Basket';

const CartScreen = () => {
  return (
    <SafeAreaView>
      <DefaultNavbar type="Cart" />
      <Basket />
      <ProductList />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
