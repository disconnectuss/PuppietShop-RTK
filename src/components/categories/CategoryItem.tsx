import React, {FC} from 'react';
import {View, Image, Text} from 'native-base';
import {CategoryStyles} from '../../assets/styles/Styles';
import {CategoryType} from '../../types';

interface CategoryItemProps {
  item: CategoryType;
  isScreen?: boolean;
}

const CategoryItem: FC<CategoryItemProps> = ({item, isScreen}) => {
  return (
    <>
      <View style={CategoryStyles.imageContainer}>
        <Image
          alt="image"
          source={item.img_uri}
          style={CategoryStyles.categoryImg}
        />
        {isScreen && <Text style={CategoryStyles.text}>{item.name}</Text>}
      </View>
    </>
  );
};

export default CategoryItem;
