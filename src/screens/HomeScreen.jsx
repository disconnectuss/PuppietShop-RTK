import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Box, Stack, ScrollView} from 'native-base';
import DefaultIcon from '../components/icons/DefaultIcon';
import Carousel from '../components/carousel/Carousel';
import ProductList from '../components/products/ProductList';

const HomeScreen = () => {
//   useEffect(()=>{
//     axios.get('http://192.168.1.56:3000')
//     .then((res)=>console.log(res.json))
   
   
//   },[])
 {/*} const getProducts = () => {
    axiosInstance
      .get('/products')
      .then(products => console.log(products.data))
      .catch(error => console.log(error.message));
  };
  useEffect(() => {
    console.log('girdim');
    getProducts();
  }, []);*/}
  return (
    <ScrollView>
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
          autoCompleteType="off"
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
      <ProductList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
