import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Box, FlatList, Image} from 'native-base';
import {dogProducts} from '../../db/db';
import {CardStyles, ProductWrrapper} from '../../assets/styles/Styles';

const ProductList = ({product}) => {
  return (
    <View style={ProductWrrapper.container}>
      <Text style={{fontSize:15}}>Popular</Text>
      <FlatList
        data={dogProducts}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Box style={CardStyles.card}>
            <Image style={CardStyles.cardImg} source={{uri: item.img_url}} alt='product'/>
            <View style={CardStyles.row}>
              <Text style={CardStyles.prevPrice}> ${item.prev_price}</Text>
              <Text style={CardStyles.price}> ${item.price}</Text>
            </View>
            <View style={CardStyles.row}>
              <Text style={CardStyles.brand}>{item.brand}</Text>
              <Text style={CardStyles.name}>{item.name}</Text>
              <Text style={CardStyles.amount}>{item.size}</Text>
            </View>
          </Box>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ProductList;
