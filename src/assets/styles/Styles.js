import {Dimensions, StyleSheet} from 'react-native';
// productCard
export const CardStyles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 5,
    margin: 8,
    shadowColor: '#b2b2b2',
    width: 150,
    height: 200,
    marginHorizontal: 5,
    marginTop: 5,
  },
  cardImg: {
    height: '60%',
    width: '100%',
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    shadowColor: '#b2b2b2',
    objectFit: 'contain',
  },
  prevPrice: {
    fontStyle: 'normal',
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#878f99', // gray
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  price: {
    fontStyle: 'normal',
    fontSize: 12,
    color: '#ff7b25', // orange
  },
  brand: {
    fontStyle: 'bold',
    fontSize: 12,
  },
  name: {
    fontStyle: 'normal',
    fontSize: 12,
  },
  amount: {
    color: '#878f99', // gray
    fontSize: 12,
  },
});
// productWrapper
export const ProductWrrapper = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
// carousel
export const {width} = Dimensions.get('window');
export const CarouselStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
});
// categoryStyles
export const CategoryStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 15,
    gap: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    marginRight: 10,
    marginBottom: 20,
  },
  categoryImg: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
    marginLeft: 15,
  },
});
