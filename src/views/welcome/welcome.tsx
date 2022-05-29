import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';


import ButtonForm from '../../components/buttonForm/buttonForm';
import stylesWelcome from './welcome.styles';


const Welcome = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <>
      <ImageBackground style={{ width: windowWidth, height: windowHeight, opacity: 0.5 }} blurRadius={10} source={require('../../res/img/bk.png')} />

      <SafeAreaView style={stylesWelcome.container} >
        <View style={stylesWelcome.viewHead}>
          <View>
            <Image source={require('../../res/img/logo.png')} style={stylesWelcome.imgHead} />
          </View>
          <Text style={stylesWelcome.textHead}>Welcome! Again</Text>
        </View>
        <View style={stylesWelcome.viewRegister}>
          <ButtonForm text={'Login'}/>
          <ButtonForm text={'Register'}/>
        </View>
      </SafeAreaView>
    </>
  );
};


export default Welcome;
