import React from 'react';
import {StyleSheet, View} from 'react-native';
import DefaultIcon from './DefaultIcon';
import {Pressable} from 'native-base';

const Grid = () => {
  return (
    <Pressable style={styles.gridContainer}>
      <DefaultIcon name="grid" size={20} color={'#fff'} />
    </Pressable>
  );
};

export default Grid;

const styles = StyleSheet.create({
  gridContainer: {
    position: 'absolute',
    bottom: 55,
    left: 12,
    backgroundColor: '#FD9220',
    padding: 13,
    borderRadius: 50,
  },
});
