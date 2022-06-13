import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image, Alert } from 'react-native';

import ButtonForm from '../../components/buttonForm/buttonForm';
import InputForm from '../../components/inputForm/inputForm';
import stylesLogin from './login.styles';
import { AuthContext } from '../../state/contexts/context';



const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = React.useContext(AuthContext)


  const login = (username: any, password: any) => {
    signIn(username, password);
    
  }



  return (
    <View>
      <View style={stylesLogin.viewImg}>
        <Image
          source={
            require('../../res/img/logoNative1.png')
          }
          style={stylesLogin.img}
        />
        <Text style={stylesLogin.textTitle}>Log In</Text>
      </View>

      <View>
        <View style={stylesLogin.loginView}>
          <InputForm text={'Email...'} type={'email-address'} changed={setEmail} secure={false} />
          <InputForm text={'Password...'} type={'default'} changed={setPassword} secure={true} />
          <Text style={stylesLogin.textPassword}>Forgot your password?</Text>

          <View style={{ alignItems: 'center' }}>
            <ButtonForm text={'Login'} pressed={() => { login(email, password) }} />
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
