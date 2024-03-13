import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Box, Stack, ScrollView} from 'native-base';
import DefaultIcon from '../components/icons/DefaultIcon';
import Carousel from '../components/carousel/Carousel';
import ProductList from '../components/products/ProductList';
import {useAppDispatch} from '../app/hooks';
import {setProduct} from '../features/product/productSlice';
import {setCategories} from '../features/category/categorySlice';
import {dogProducts, categories} from '../db/db';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
import CategoryList from '../components/categories/CategoryList';
import Grid from '../components/icons/Grid';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProduct(dogProducts));
    dispatch(setCategories(categories));
  }, []);

  return (
    <ScrollView>
      <DefaultNavbar />
      <Stack space={4} width="75%" maxW="300px">
        <Input
          variant="unstyled"
          focusOutlineColor="gray.500"
          placeholder="Neye ihtiyacın var?"
          borderRadius={8}
          py={3}
          px={1}
          borderWidth={0.2}
          fontSize={14}
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
          InputLeftElement={
            <Box pl={3}>
              <DefaultIcon name="search" size={24} color="orange" />
            </Box>
          }
        />
      </Stack>
      <Carousel />
      <ProductList title="Popular" />
      <CategoryList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
