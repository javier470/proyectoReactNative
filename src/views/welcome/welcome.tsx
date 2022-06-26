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
import Color from '../../res/colors/colors';
import stylesWelcome from './welcome.styles';


const Welcome = ({ navigation }: any) => {
  return (
    <>
      <ImageBackground style={stylesWelcome.imgBack} blurRadius={10} source={require('../../res/img/bk.png')} />

      <SafeAreaView style={stylesWelcome.container} >
        <View style={stylesWelcome.viewHead}>
          <View>
            <Image source={require('../../res/img/logo.png')} style={stylesWelcome.imgHead} />
          </View>
          <Text style={stylesWelcome.textHead}>Welcome! Again</Text>
        </View>
        <View style={stylesWelcome.viewRegister}>
          <ButtonForm text={'Login'} pressed={() => navigation.navigate('Login')} />
          <ButtonForm text={'Register'} pressed={() => navigation.navigate('phoneNumber')} />
        </View>
      </SafeAreaView>
    </>
  );
};


export default Welcome;
