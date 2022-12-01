import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemsContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    paddingBottom: 20,
  },
  productImage: {
    width: 120,
    height: 150,
  },
  favImage: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
  name: {
    color: 'black',
  },
  price: {
    color: 'black',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 17,
  },
  positionItems: {
    flex: 1,
    flexDirection: 'row',
  },
  addToCart: {
    width: 28,
    height: 28,
    marginBottom: 3,
  },
  positionItems2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  starPosition: {
    flex: 1,
    flexDirection: 'row',
  },
  starHeight: {
    width: 20,
    height: 20,
  },
  priceNamePosition: {
    flex: 1,
    marginLeft: 10,
  },
});
