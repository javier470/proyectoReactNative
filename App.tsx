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

import React, { useEffect } from 'react';
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
import { AuthContext } from './src/state/contexts/context';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Color from './src/res/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();



const MyTheme = {
  dark: false,
  colors: {
    background: Color.primary,
  },
};



const App = () => {
  const [isToken, setIsToken] = React.useState('');
 

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }

      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        }

      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }

    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (userName: any, password: any) => {
      let userToken: any;
      userToken = null
      if (userName == 'user' && password == '123') {
        try {
          userToken = 'fss'
          setIsToken(userToken)
          await AsyncStorage.setItem('token', userToken)
          Alert.alert('Logged', `Welcome, ${userName}`)
          console.log('logged')
        } catch (err) {
          console.log(err)
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken })
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('token')
      } catch (err) {
        console.log(err)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
    },
  }), []);

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
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={MyTheme}>

        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Body' component={Body} />
        </Stack.Navigator>


      </NavigationContainer>
    </AuthContext.Provider>



  );
};



export default App;