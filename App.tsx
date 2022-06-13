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

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import style from './src/styles/style';

import Login from './src/views/login/index';
import Welcome from './src/views/welcome/index';
import Register from './src/views/register/index';
import Body from './src/views/body/index';
import { AuthContext, UserProvider } from './src/state/contexts/context';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Color from './src/res/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginReducer, initialLoginState } from './src/state/reducers/auth';

const Stack = createNativeStackNavigator();



const MyTheme = {
  dark: false,
  colors: {
    background: Color.primary,
  },
};



const App = () => {
  const [isToken, setIsToken] = React.useState('');
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  useEffect(() => {
    setTimeout(async () => {
      let userToken: any;
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('token')
      } catch (err) {
        console.log(err)
      }
      dispatch({ type: 'RETRIVE_TOKEN', token: userToken })
    }, 1000);
  }, [])


  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Body' component={Body}/>
      </Stack.Navigator>
    </NavigationContainer>



  );
};



export default () => <UserProvider><App /></UserProvider>;
export { App }