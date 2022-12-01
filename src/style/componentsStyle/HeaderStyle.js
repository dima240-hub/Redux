import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 35,
    height: 30,
    marginRight: 20,
  },
  plusImage: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  favImage: {
    width: 35,
    height: 30,
    marginRight: 10,
  },
  fixFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  itemsContainer: {
    borderWidth: 2,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    left: 12,
    top: 8,
    backgroundColor: '#ff7400',
  },
  itemsNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  fixCart: {bottom: 12},
  textInputtext: {
    color: 'black',
  },
  textInputContaier: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  searchImg: {
    width: 20,
    height: 20,
  },
});
