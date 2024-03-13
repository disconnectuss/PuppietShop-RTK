import React, {FC} from 'react';
import {Box, FlatList, Image, ScrollView, Text, View} from 'native-base';
import DefaultIcon from '../icons/DefaultIcon';
import {ProductType} from '../../types';

import BasketGroupItem from './BasketGroupItem';
import {BasketGroupStyles} from '../../assets/styles/Styles';

interface BasketGroupProps {
  item: {
    shop: {
      name: string;
      rating: number;
    };
    products: ProductType[];
  };
}

const BasketGroup: FC<BasketGroupProps> = ({item}) => {
  return (
    <View style={BasketGroupStyles.sellerContainer}>
      <View style={BasketGroupStyles.shopNameContainer}>
        <Text style={BasketGroupStyles.shopName}>{item.shop.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
          }}>
          <DefaultIcon name="star" color="orange" size={18} />
          <Text
            style={{
              fontWeight: '600',
              color: 'orange',
            }}>
            {item.shop.rating}
          </Text>
        </View>
      </View>
      <FlatList
        data={item.products}
        renderItem={({item}) => <BasketGroupItem item={item} />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{borderWidth: 1, borderColor: 'lightgray'}} />
        )}
      />
    </View>
  );
};

export default BasketGroup;
