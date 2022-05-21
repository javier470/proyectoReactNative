import React from 'react';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';

import stylesBtn from '../Style/button';
import stylesImg from '../Style/image';
import stylesInp from '../Style/input';
import stylesText from '../Style/text';
import stylesView from '../Style/view';

const Login = () => {
  return (
    <View>
      <View style={stylesView.viewImg}>
        <Image
          source={
            require('../img/logoNative.png')
          }
          style={stylesImg.img}
        />
        <Text style={stylesText.textTitle}>WELCOME BACK</Text>
      </View>

      <View>
        <View style={stylesView.loginView}>
        <TextInput
            placeholderTextColor="#fff"
            placeholder="Email..."
            style={stylesInp.loginInput}
            keyboardType={'email-address'} />

          <TextInput
            placeholderTextColor="#fff"
            placeholder="Password..."
            style={stylesInp.loginInput}
            secureTextEntry />
          <Text style={stylesText.textPassword}>Forgot your password?</Text>
          <TouchableOpacity style={stylesBtn.btnLogin}>
            <Text style={stylesText.text}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={stylesText.textOrLogin}>or login with:</Text>
        </View>
        <View style={stylesView.imgView}>
          <Image
            source={{
              uri: 'https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png',
            }}
            style={stylesImg.imgIcon}
          />
          <Image
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/730/PNG/512/google_icon-icons.com_62798.png',
            }}
            style={stylesImg.imgIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
