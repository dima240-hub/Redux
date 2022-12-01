import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../style/screensStyle/ProductDetailsStyle';
import {ImageSlider} from 'react-native-image-slider-banner';
const ProductDetailsScreen = ({route}) => {
  const data = route.params.item;
  return (
    <View style={styles.container}>
      <ImageSlider
        data={data.product_image.map(item => {
          return {img: item};
        })}
        autoPlay={false}
        closeIconColor="red"
      />
    </View>
  );
};
export default ProductDetailsScreen;
