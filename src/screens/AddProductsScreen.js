import React, {useEffect} from 'react';
import {useState, useRef} from 'react';
import {View, TextInput, Text, Image, ScrollView, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../redux/productRedux/productAction';
import {launchImageLibrary} from 'react-native-image-picker';
import {styles} from '../style/screensStyle/AddProductStyle';
import createFormData from '../createFormData';
import {productImageList} from '../redux/productPhotoRedux/productPhotoAction';
import {SERVER} from '../server';

const AddProductsScreen = ({navigation}) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [photo, setPhoto] = React.useState(null);
  const [uploaded, setUploaded] = useState(false);
  const data = useSelector(state => state.productImageData);

  useEffect(() => {
    photo &&
      dispatch(productImageList(`${photo.assets[0].fileName.toString()}`));
  }, [photo]);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response && response.didCancel != true) {
        setPhoto(response);
      } else {
        setPhoto(null);
      }
    });
  };
  console.log(product);
  const handleUploadPhoto = () => {
    fetch(`${SERVER}/api/upload`, {
      method: 'POST',
      body: createFormData(photo),
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        alert('Try Again');
      });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}>
      <Text style={styles.title}>Publish your ad</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Product name"
          placeholderTextColor={'white'}
          style={styles.placeHolder}
          autoCapitalize="none"
          onChangeText={text => setProduct({...product, product_name: text})}
          onSubmitEditing={() => firstNameRef.current.focus()}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          ref={firstNameRef}
          placeholder="Price"
          placeholderTextColor={'white'}
          style={styles.placeHolder}
          onChangeText={text => setProduct({...product, price: Number(text)})}
          autoCapitalize="none"
          onSubmitEditing={() => lastNameRef.current.focus()}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          ref={lastNameRef}
          placeholder="Description"
          placeholderTextColor={'white'}
          style={styles.placeHolder}
          onChangeText={text => setProduct({...product, message: text})}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity onPress={() => handleChoosePhoto()}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Choose photo</Text>
        </View>
      </TouchableOpacity>
      {photo && (
        <>
          <Image source={{uri: photo.assets[0]?.uri}} style={styles.image} />
          <View style={styles.centerButtons}>
            <TouchableOpacity
              onPress={() => {
                setProduct({...product, product_image: data.data});
                handleUploadPhoto();
                setUploaded(!uploaded);
              }}>
              <View style={styles.submit}>
                <Text style={styles.textSubmit}>Upload</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (uploaded) {
                  dispatch(addProduct(product));
                  navigation.navigate('Screens');
                  setUploaded(!uploaded);
                } else {
                  alert('Upload the image');
                }
              }}>
              <View style={[styles.submit, uploaded ? '' : styles.transparent]}>
                <Text style={styles.textSubmit}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default AddProductsScreen;
