import { Text, View } from 'native-base';
import React from 'react';
import DefaultIcon from '../icons/DefaultIcon';
import { DiscounBadgestyles } from '../../assets/styles/Styles';


const DiscountBadge = () => {
  return (
    <View style={DiscounBadgestyles.container}>
      <DefaultIcon name="contract" size={20} color={'orange'} />
      <Text style={DiscounBadgestyles.text}>Enter your discount code</Text>
      <DefaultIcon name="chevron-forward" size={20} color={'orange'} />
    </View>
  );
};


export default DiscountBadge;

