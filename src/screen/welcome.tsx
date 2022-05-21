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
import stylesImg from '../Style/image';
import stylesText from '../Style/text';
import stylesView from '../Style/view';

import Backgr from './backgr';
const Welcome = () => {
  return (
    <>
      <Backgr />
      <SafeAreaView style={styles.container} >
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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center'
  },

})

export default Welcome;
