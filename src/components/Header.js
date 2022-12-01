import React from 'react';
import {View, Text, Image, Button, TextInput} from 'react-native';
import {styles} from '../style/componentsStyle/HeaderStyle';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {searchList} from '../redux/productRedux/productAction';
const Header = ({navigation}) => {
  const cartDataLenght = useSelector(state => state.cartData.length);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.fixFlex}>
        <Image source={require('../../imgs/logo.png')} style={styles.logo} />
        <View style={styles.textInputContaier}>
          <Image
            source={require('../../imgs/search.png')}
            style={styles.searchImg}
          />
          <TextInput
            placeholder="search"
            placeholderTextColor={'grey'}
            autoCapitalize="none"
            style={styles.textInputtext}
            onChangeText={text => dispatch(searchList(text))}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AddProducts')}>
        <Image
          source={require('../../imgs/plus.png')}
          style={styles.plusImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
        <Image source={require('../../imgs/fav.png')} style={styles.favImage} />
      </TouchableOpacity>
      <View style={styles.fixCart}>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <View style={styles.itemsContainer}>
            <Text style={styles.itemsNumber}>{cartDataLenght}</Text>
          </View>
          <Image source={require('../../imgs/cart.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
