import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DefaultIcon from '../icons/DefaultIcon';
import {SafeAreaView} from 'react-native';
import {Avatar} from 'native-base';
import {navbarStyles} from '../../assets/styles/Styles';
import {useAppDispatch} from '../../app/hooks';
import {clearCart} from '../../features/cart/cartSlice';
interface DefaultNavbarProps {
  type?: string;
}

const DefaultNavbar: FC<DefaultNavbarProps> = ({type}) => {
  const dispatch = useAppDispatch();

  if (type === 'Cart') {
    return (
      <View style={navbarStyles.navbar}>
        <Text style={navbarStyles.cartText}>Cart</Text>
        <TouchableOpacity onPress={() => dispatch(clearCart())}>
          <DefaultIcon name={'trash-outline'} size={23} color={'orange'} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={navbarStyles.navbar}>
          <Text style={navbarStyles.text}>Puppiet Shop</Text>
          <View style={navbarStyles.avatar}>
            <DefaultIcon
              name={'notifications-outline'}
              size={25}
              color={'black'}
            />
            <Avatar
              alignSelf="end"
              size="xs"
              source={require('../../assets/images/avatar.jpeg')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default DefaultNavbar;
