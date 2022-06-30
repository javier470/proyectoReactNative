import React, { useEffect, useState } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import ButtonForm from '../../components/buttonForm/buttonForm';
import AuthContext from '../../state/contexts/context';
import style from './home.styles'

const Home = () => {
  const [{}, {signOut}] = React.useContext(AuthContext);



  return (
    <View>
      <Text style={style.title}>Welcome to our app!</Text>
      <ButtonForm text={'logout'} pressed={() => { signOut()}} />
    </View>
  );
};


export default Home;
