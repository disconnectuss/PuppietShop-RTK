import React from 'react';
import {View} from 'react-native';
import CategoryItem from '../components/categories/CategoryItem';
import {useAppSelector} from '../app/hooks';
import {getCategoriesState} from '../features/category/categorySelector';
import {FlatList, Text} from 'native-base';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
import {CategoryScreenStyles} from '../assets/styles/Styles';

const CategoriesScreen = () => {
  const categories = useAppSelector(getCategoriesState());
  return (
    <>
      <DefaultNavbar />
      <View style={CategoryScreenStyles.container}>
        <Text style={CategoryScreenStyles.header}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({item}) => <CategoryItem item={item} isScreen />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </>
  );
};

export default CategoriesScreen;
