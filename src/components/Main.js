import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartRedux/action';
import {productList, setRate} from '../redux/productRedux/productAction';
import {useSelector} from 'react-redux';
import {styles} from '../style/componentsStyle/MainStyle';
import {setActive} from '../redux/productRedux/productAction';

const Main = ({navigation}) => {
  const [maxRaiting] = useState([1, 2, 3, 4, 5]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData);
  const [dataRes, setDataRes] = useState('');
  console.log(data);
  useEffect(() => {
    dispatch(productList());
  }, []);
  // console.log(dataRes);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.itemsContainer}>
              <View style={styles.positionItems}>
                <TouchableOpacity
                  onPress={() => {
                    setDataRes(item);
                    navigation.navigate('ProductDetails', {
                      item,
                    });
                  }}>
                  <Image
                    source={{
                      uri: `${
                        typeof item.product_image === 'object'
                          ? item.product_image[0]
                          : item.product_image
                      }`,
                    }}
                    style={styles.productImage}
                  />
                </TouchableOpacity>

                <View style={styles.priceNamePosition}>
                  <Text style={styles.name}>{item.product_name}</Text>
                  <Text style={styles.price}>{item.price}e</Text>
                  <Text style={styles.name}>{item.message}</Text>
                  <View style={styles.positionItems2}>
                    <View style={styles.starPosition}>
                      {maxRaiting.map(raiting => {
                        return (
                          <TouchableOpacity
                            key={raiting}
                            onPress={() =>
                              dispatch(setRate({id: item.id, rate: raiting}))
                            }>
                            <Image
                              style={styles.starHeight}
                              source={
                                raiting <= item.rate
                                  ? require('../../imgs/starFilled.png')
                                  : require('../../imgs/starEmpty.png')
                              }
                            />
                          </TouchableOpacity>
                        );
                      })}
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        dispatch(
                          setActive({id: item.id, favorite: !item.favorite}),
                        );
                      }}>
                      {!item.favorite ? (
                        <Image
                          source={require('../../imgs/fav.png')}
                          style={styles.favImage}
                        />
                      ) : (
                        <Image
                          source={require('../../imgs/favRed.png')}
                          style={styles.favImage}
                        />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                      <Image
                        source={require('../../imgs/addToCart.png')}
                        style={styles.addToCart}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Main;
