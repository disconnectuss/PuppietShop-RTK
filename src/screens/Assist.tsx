import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Center, Image} from 'native-base';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
import { AssistStyles } from '../assets/styles/Styles';

const Assist = () => {
  return (
    <>
      <DefaultNavbar />
      <Center flex={1}>
        <View style={AssistStyles.container}>
          <Text style={AssistStyles.text}>How can I help you?</Text>
          <Image
            size={200}
            borderRadius={100}
            source={require('.././assets/images/assist.webp')}
            alt="Call Center Img"
          />
        </View>
      </Center>
    </>
  );
};



export default Assist;
