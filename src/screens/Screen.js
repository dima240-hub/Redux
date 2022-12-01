import React from 'react';
import {View, Text, Button} from 'react-native';
import Main from '../components/Main';
import Header from '../components/Header';
const Screen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={navigation} />
      <Main navigation={navigation} />
    </View>
  );
};
export default Screen;
