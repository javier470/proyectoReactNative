import React from 'react';
import { Text, View, Image } from 'react-native';

import ButtonForm from '../../components/buttonForm/buttonForm';
import InputForm from '../../components/inputForm/inputForm';
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
          <InputForm text={'Email...'} type={'email-address'} secure={false}/>
          <InputForm text={'Password...'} type={'default'} secure={true}/>
          <Text style={stylesLogin.textPassword}>Forgot your password?</Text>

          <View style={{alignItems: 'center'}}>
            <ButtonForm text={'Login'} />
          </View>
          <Text style={stylesLogin.textOrLogin}>or login with:</Text>
        </View>
        <View style={stylesLogin.imgView}>
          <Image
            source={require('../../res/img/facebookLogo.png')}
            style={stylesLogin.imgIcon}
          />
          <Image
            source={require('../../res/img/googleLogo.png')}
            style={stylesLogin.imgIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
