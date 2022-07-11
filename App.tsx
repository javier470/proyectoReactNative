/**UseEfect servira para guardar el token con RETRIVE_TOKEN  */
import React, {useEffect, useState} from 'react';
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
import PhoneNumber from './src/views/register/phoneNumber/index';
import Register from './src/views/register/index';
import ConfirmCode from './src/views/register/confirmCode/confirmCode';
import Home from './src/views/home';
import Map from './src/views/map';
import {AuthContext, UserProvider} from './src/state/contexts/context';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Color from './src/res/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginReducer, initialLoginState} from './src/state/reducers/auth';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: Color.primary,
  },
};

const App = () => {
  const [{userToken}, {}] = React.useContext(AuthContext)
  const [isToken, setIsToken] = React.useState('');
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  useEffect(() => {
    
    setTimeout(async () => {
      //await AsyncStorage.removeItem('token');
      let userToke: any;
      userToke = null;
      try {
        userToke = await AsyncStorage.getItem('token');
        loginState.userToken = await AsyncStorage.getItem('token');
      } catch (err) {
        console.log(err);
      }
      //dispatch({type: 'RETRIVE_TOKEN', token: userToke});
    }, );
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userToken == null ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='phoneNumber' component={PhoneNumber} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Code" component={ConfirmCode} />
          </>
        ) : (
          <>
            <Stack.Screen name="Body" component={Home} />
            <Stack.Screen name="Map" component={Map}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
export {App};
