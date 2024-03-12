import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {CardStyles, ProductWrrapper} from '../../assets/styles/Styles';
import {ProductType} from '../../types';
import {Box, Image} from 'native-base';
import DefaultIcon from '../icons/DefaultIcon';

interface ProductItemProps {
  item: ProductType;
}

const ProductListItem: FC<ProductItemProps> = ({item}) => {
  const discountedPrice = Math.floor(
    item.price - (item.price * item.discountPercentage) / 100,
  );
  return (
    <Box style={CardStyles.card}>
      <View style={CardStyles.imgWrapper}>
        <Image
          style={CardStyles.cardImg}
          source={{uri: item.img_url}}
          alt="product"
        />

        <TouchableOpacity style={CardStyles.plusIcon}>
          <DefaultIcon name={'add'} size={25} color={'white'} />
        </TouchableOpacity>
        <View style={CardStyles.starIcon}>
        <DefaultIcon name={'star'} size={15} color={'#ff8503'} />
        <Text style={{fontSize: 12, color: '#ff8503', fontWeight: 'bold'}}>
          {item.rating}
        </Text>
      </View>
      </View>
      <View style={CardStyles.content}>
        <View style={CardStyles.priceWrapper}>
          <Text style={CardStyles.prevPrice}> ${item.price}</Text>
          <Text style={CardStyles.price}> ${discountedPrice}</Text>
        </View>
        <View>
          <Text style={CardStyles.brand}>{item.brand}</Text>
          <Text style={CardStyles.name}>{item.name}</Text>
          <Text style={CardStyles.amount}>
            {item.size} {item.sizeType}
          </Text>
        </View>
      </View>
    </Box>
  );
};
export default ProductListItem;
