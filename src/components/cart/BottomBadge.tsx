import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DefaultIcon from '../icons/DefaultIcon';
import {useAppSelector} from '../../app/hooks';
import {getCartTotal} from '../../features/cart/cartSelector';
import { ButtomBadgestyles } from '../../assets/styles/Styles';

const BottomBadge = () => {
  const cartTotal = useAppSelector(getCartTotal());
  console.log(cartTotal);

  return (
    <View style={ButtomBadgestyles.container}>
      <View>
        <Text>Cart Total</Text>
        <View style={ButtomBadgestyles.priceContainer}>
          <Text style={ButtomBadgestyles.text}>${cartTotal}</Text>
          <DefaultIcon name="chevron-up" size={15} color="orange" />
        </View>
      </View>

      <TouchableOpacity style={ButtomBadgestyles.button}>
        <Text style={{
            color:'white'
        }}>Approve Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBadge;


