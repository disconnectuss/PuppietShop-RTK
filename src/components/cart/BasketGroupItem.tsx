import {Image, Text, View} from 'native-base';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ProductType} from '../../types';
import DefaultIcon from '../icons/DefaultIcon';
import {useAppDispatch} from '../../app/hooks';
import {
  incrementQuantity,
  decrementQuantity,
} from '../../features/cart/cartSlice';
interface BasketGroupItemProps {
  item: ProductType;
}

const BasketGroupItem: FC<BasketGroupItemProps> = ({item}) => {
  const dispatch = useAppDispatch();

  const discountedPrice = (
    item.price -
    (item.price * item.discountPercentage) / 100
  ).toFixed(2);
  return (
    <View style={styles.productContainer}>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
        }}>
        <Image alt='product' source={{uri: item.img_url}} style={styles.productImage} />
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>
            {item.brand} <Text style={{fontWeight: 'normal'}}>{item.name}</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 2,
          }}>
          <Text
            style={{
              color: 'gray',
            }}>
            {item.size}
          </Text>
          <Text
            style={{
              color: 'gray',
            }}>
            {item.sizeType}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 20,
              paddingHorizontal: 5,
            }}>
            <TouchableOpacity
              onPress={() => dispatch(decrementQuantity(item.id))}>
              <DefaultIcon name="remove" size={15} color="orange" />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'orange',
                marginVertical: 2,
                paddingVertical: 2,
                paddingHorizontal: 4,
                borderRadius: 50,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                {item.quantity}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(incrementQuantity(item.id))}>
              <DefaultIcon name="add" size={15} color="orange" />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: 'gray',
              }}>
              ${(item.quantity * item.price).toFixed(2)}
            </Text>
            <Text
              style={{
                color: 'orange',
                fontWeight: 'bold',
              }}>
              $ {item.quantity * discountedPrice}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
  },
  productImage: {
    width: 70,
    height: 70,
  },
});

export default BasketGroupItem;
