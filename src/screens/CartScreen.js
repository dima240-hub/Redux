import React from 'react';
import {View, Text, Button, Image, FlatList} from 'react-native';

import {useSelector} from 'react-redux';

const CartScreen = () => {
  const cartData = useSelector(state => state.cartData);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={cartData}
        keyExtractor={item => Math.floor(Math.random() * 1000)}
        renderItem={({item}) => {
          return (
            <View>
              <Image
                source={{uri: item.product_image[0]}}
                style={{height: 100, width: 100}}
              />
              <Text>{item.product_name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartScreen;
