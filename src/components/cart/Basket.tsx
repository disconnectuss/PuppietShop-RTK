import React from 'react';
import {FlatList, View} from 'native-base';
import {useAppSelector} from '../../app/hooks';
import {getCartState} from '../../features/cart/cartSelector';
import BasketGroup from './BasketGroup';
import EmptyBasket from './EmptyBasket';
import {ProductType} from '../../types';

interface SellerProduct {
  shop: {
    name: string;
    rating: number;
  };
  products: ProductType[];
}

const Basket = () => {
  const cart = useAppSelector(getCartState());

  const separateProductsBySeller = (
    products: ProductType[],
  ): SellerProduct[] => {
    const separatedProducts: {[key: string]: ProductType[]} = {};

    products.forEach(product => {
      const {shopName} = product;
      if (separatedProducts[shopName]) {
        separatedProducts[shopName].push(product);
      } else {
        separatedProducts[shopName] = [product];
      }
    });

    const result: SellerProduct[] = [];

    for (const shopName in separatedProducts) {
      if (Object.prototype.hasOwnProperty.call(separatedProducts, shopName)) {
        const shopRating = separatedProducts[shopName][0].shopRating;
        result.push({
          shop: {
            name: shopName,
            rating: shopRating,
          },
          products: separatedProducts[shopName],
        });
      }
    }

    return result;
  };

  return (
    <View>
      <FlatList
        data={separateProductsBySeller(cart)}
        renderItem={({item}) => <BasketGroup item={item} />}
        keyExtractor={item => item.shop.name}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyBasket />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginVertical: 5,
            }}
          />
        )}
      />
    </View>
  );
};

export default Basket;
