import {Image} from 'native-base';
import {View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {CarouselStyles} from '../../assets/styles/Styles';

const images = [
  {key: '1', source: require('../../assets/images/banner-1.jpeg')},
  {key: '2', source: require('../../assets/images/banner-2.jpeg')},
  {key: '3', source: require('../../assets/images/banner-3.webp')},
];

const Carousel = () => {
  return (
    <View style={CarouselStyles.container}>
      <SwiperFlatList
        data={images}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        autoplay={true}
        autoplayLoop={true}
        renderItem={({item}) => (
          <View style={CarouselStyles.slide}>
            <Image
              source={item.source}
              style={CarouselStyles.image}
              resizeMode="contain"
              alt="banner"
            />
          </View>
        )}
      />
    </View>
  );
};

export default Carousel;
