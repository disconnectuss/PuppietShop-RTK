import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DefaultIcon from '../icons/DefaultIcon';
import {SafeAreaView} from 'react-native';
import {Avatar} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

const DefaultNavbar = ({type}) => {
  if (type === 'Cart') {
    return (
      <View style={styles.container}>
        <Text style={styles.cartText}>Cart</Text>
        <Icon name={'delete'} size={25} color="black" />
      </View>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.navbar}>
          <Text style={styles.text}>pawder</Text>
          <View style={styles.avatar}>
            <DefaultIcon name={'notifications-outline'} size={25} />
            <Avatar
              alignSelf="end"
              size="xs"
              source={{
                uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  avatar: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DefaultNavbar;
