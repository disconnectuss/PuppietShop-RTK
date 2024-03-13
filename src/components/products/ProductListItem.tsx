import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {CardStyles} from '../../assets/styles/Styles';
import {ProductType} from '../../types';
import {Box, Image} from 'native-base';
import DefaultIcon from '../icons/DefaultIcon';
import {useAppDispatch} from '../../app/hooks';
import {addToCart} from '../../features/cart/cartSlice';
interface ProductItemProps {
  item: ProductType;
}

const ProductListItem: FC<ProductItemProps> = ({item}) => {
  const dispatch = useAppDispatch();

  const discountedPrice = (item.price - (item.price * item.discountPercentage) / 100).toFixed(2)

  return (
    <Box style={CardStyles.card}>
      <View style={CardStyles.imgWrapper}>
        <Image
          style={CardStyles.cardImg}
          source={{uri: item.img_url}}
          alt="product"
        />

        <TouchableOpacity
          style={CardStyles.plusIcon}
          onPress={() => dispatch(addToCart(item))}>
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
