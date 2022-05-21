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
} from 'react-native';

import stylesBtn from '../Style/button';
import stylesView from '../Style/view';
import stylesCont from '../Style/container';

import Backgr from './backgr';
const Welcome = () => {
  return (
    <>
      <Backgr />
      <SafeAreaView style={stylesCont.containerWel} >
        <View style={stylesView.viewHead}>
          <View>
            <Image source={require('../img/logo.png')} style={{ width: 150, height: 150 }} />
          </View>
          <Text style={{ color: 'white', fontSize: 35, }}>Welcome! Again</Text>
        </View>
        <View style={stylesView.viewRegister}>
          <TouchableOpacity style={stylesBtn.btnWelcome}><Text>Login</Text></TouchableOpacity>
          <TouchableOpacity style={stylesBtn.btnWelcome}><Text>Register</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};



export default Welcome;
