/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 * 
 * 
 * -----------------No hay Navegación todavia-----------------
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import style from './src/styles/style';

import Login from './src/views/login/index';
import Welcome from './src/views/welcome/index';
import Register from './src/views/register/index';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Color from './src/res/colors/colors';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: Color.primary,
  },
};

const App = () => {
  return (
      
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator screenOptions={{ headerShown: false }} >          
              <Stack.Screen name='Welcome' component={Welcome} />  
              <Stack.Screen name='Login' component={Login} /> 
              <Stack.Screen name='Register' component={Register} />      
          </Stack.Navigator>
        </NavigationContainer>
      

      
   
  );
};


export default App;