import React, {FC} from 'react';
import {View, Text, Box, FlatList, Image} from 'native-base';
import { ProductWrrapper} from '../../assets/styles/Styles';
import DefaultIcon from '../icons/DefaultIcon';
import {TouchableOpacity} from 'react-native';
import {useAppSelector} from '../../app/hooks';
import {getProductState} from '../../features/product/productSelector';
import ProductListItem from './ProductListItem';

interface ProductListProps {
  title: string;
}

const ProductList: FC<ProductListProps> = ({title}) => {
  const products = useAppSelector(getProductState());

  return (
    <View style={ProductWrrapper.container}>
      <Text style={{fontSize: 15}}>{title}</Text>
      <FlatList
        data={products}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default React.memo(ProductList);
