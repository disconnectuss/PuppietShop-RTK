import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const DefaultIcon = ({name, size, color}) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

export default DefaultIcon;

// const styles = StyleSheet.create({
//   icon: {
//     color: 'orange',
//   },
// });
