import React, {FC} from 'react';
import {View, FlatList, Image, Text} from 'native-base';
import {CategoryStyles} from '../../assets/styles/Styles';
import {CategoryType} from '../../types';

interface CategoryItemProps {
  item: CategoryType;
}

const CategoryItem: FC<CategoryItemProps> = ({item}) => {
  return (
    <View style={CategoryStyles.imageContainer}>
      <Image
        alt="image"
        source={item.img_uri}
        style={CategoryStyles.categoryImg}
      />
    </View>
  );
};

export default CategoryItem;
