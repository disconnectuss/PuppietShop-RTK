import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface DefaultIconProps {
  name: string;
  size?: number;
  color?: string;
}

const DefaultIcon: FC<DefaultIconProps> = ({
  name,
  size = 25,
  color = 'black',
}) => {
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
