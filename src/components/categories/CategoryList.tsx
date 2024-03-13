import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'native-base';
import {useAppSelector} from '../../app/hooks';
import {getCategoriesState} from '../../features/category/categorySelector';
import CategoryItem from './CategoryItem';
import {ProductWrrapper} from '../../assets/styles/Styles';
const CategoryList = () => {
  const categories = useAppSelector(getCategoriesState());
  return (
    <View
      style={[
        ProductWrrapper.container,
        {
          gap: 10,
        },
      ]}>
    <Text style={{color: '#666'}}>Categories</Text> 
      <FlatList
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;
