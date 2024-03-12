import React from 'react';
import {View} from 'react-native';
import CategoryItem from '../components/categories/CategoryItem';
import {useAppSelector} from '../app/hooks';
import {getCategoriesState} from '../features/category/categorySelector';
import {FlatList} from 'native-base';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
const CategoriesScreen = () => {
  const categories = useAppSelector(getCategoriesState());
  return (
    <>
      <DefaultNavbar />
      <FlatList
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default CategoriesScreen;
