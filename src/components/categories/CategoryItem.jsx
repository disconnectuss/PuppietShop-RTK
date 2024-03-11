import React from 'react';
import {View, FlatList, Image, Text} from 'native-base';
import {CategoryStyles} from '../../assets/styles/Styles';

const CategoryItem = () => {
  const images = [
    {id: '1', source: require('../../assets/images/food.jpeg')},
    {id: '2', source: require('../../assets/images/toys.jpeg')},
    {id: '3', source: require('../../assets/images/accessories.jpeg')},
    {id: '4', source: require('../../assets/images/beds.jpeg')},
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={CategoryStyles.imageContainer}>
        <Image
          alt="image"
          source={item.source}
          style={CategoryStyles.categoryImg}
        />
      </View>
    );
  };

  return (
    <View style={CategoryStyles.container}>
      <Text style={CategoryStyles.text}>Categories</Text>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CategoryItem;
