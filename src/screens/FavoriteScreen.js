import React, {useEffect} from 'react';
import {View, Text, Button, Image, FlatList} from 'react-native';
import {productFavoriteList} from '../redux/productFavoriteRedux/productFavoriteAction';
import {useDispatch, useSelector} from 'react-redux';

const FavoriteScreen = ({}) => {
  const favoriteData = useSelector(state => state.productFavoriteData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productFavoriteList());
  }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={favoriteData}
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

export default FavoriteScreen;
