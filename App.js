import React from 'react';
import {View} from 'react-native';
import Screen from './src/screens/Screen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CartScreen from './src/screens/CartScreen';
import AddProductsScreen from './src/screens/AddProductsScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screens" component={Screen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="AddProducts" component={AddProductsScreen} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
