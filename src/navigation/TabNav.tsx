import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DefaultIcon from '../components/icons/DefaultIcon';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import Assist from '../screens/Assist';
import {useAppSelector} from '../app/hooks';
import {getCartTotal, getCartState} from '../features/cart/cartSelector';
import {Text, View} from 'native-base';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const cartTotal = useAppSelector(getCartTotal());
  const cart = useAppSelector(getCartState());
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FD9220',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 20,
          paddingVertical: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({size, color, focused}) => (
            <DefaultIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({size, color, focused}) => (
            <DefaultIcon name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: ({color}) => (
            <View>
              <Text style={{color, fontSize: 10}}>
                {cartTotal} {'\u20BA'}
              </Text>
            </View>
          ),

          tabBarBadge: cart.length > 0 ? cart.length : 0,
          tabBarIcon: ({size, color, focused}) => (
            <DefaultIcon name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Assistance"
        component={Assist}
        options={{
          tabBarLabel: 'Assistance',
          tabBarIcon: ({size, color, focused}) => (
            <DefaultIcon name="help-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
