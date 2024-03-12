import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Center, Image} from 'native-base';
import DefaultNavbar from '../components/navbar/DefaultNavbar';

const Assist = () => {
  return (
    <>
      <DefaultNavbar />
      <Center flex={1}>
        <View style={styles.container}>
          <Text style={styles.text}>How can I help you?</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    position: 'absolute',
    top: 20,
    zIndex: 1,
    marginTop: 50,
    fontSize: 30,
  },
});

export default Assist;
