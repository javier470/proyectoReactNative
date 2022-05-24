import React from 'react';
import { Text, View, Image } from 'react-native';

import ButtonForm from '../../components/buttonForm/buttonForm';
import InputEmail from '../../components/inputLogin/inputEmail';
import InputPassword from '../../components/inputLogPass/inputPassword';
import stylesLogin from './login.styles';

const Login = () => {
  return (
    <View>
      <View style={stylesLogin.viewImg}>
        <Image
          source={
            require('../../res/img/logoNative.png')
          }
          style={stylesLogin.img}
        />
        <Text style={stylesLogin.textTitle}>Log In</Text>
      </View>

      <View>
        <View style={stylesLogin.loginView}>
          <InputEmail/>
          <InputPassword />
          <Text style={stylesLogin.textPassword}>Forgot your password?</Text>

          <View style={{alignItems: 'center'}}>
            <ButtonForm text={'Login'} />
          </View>
          <Text style={stylesLogin.textOrLogin}>or login with:</Text>
        </View>
        <View style={stylesLogin.imgView}>
          <Image
            source={{
              uri: 'https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png',
            }}
            style={stylesLogin.imgIcon}
          />
          <Image
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/730/PNG/512/google_icon-icons.com_62798.png',
            }}
            style={stylesLogin.imgIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
