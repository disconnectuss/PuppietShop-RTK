import { Text} from 'react-native';
import React from 'react';
import {Center, Image} from 'native-base';
import { EmptyStyles } from '../../assets/styles/Styles';

const EmptyBasket = () => {
  return (
    <Center style={EmptyStyles.EmptyBasketContainer}>
      <Image
        size={200}
        borderRadius={100}
        source={require('../../assets/images/sadDog.jpeg')}
        alt="Call Center Img"
      />
      <Text style={EmptyStyles.text}>Soorry! You din't buy anything..</Text>
    </Center>
  );
};

export default EmptyBasket;


