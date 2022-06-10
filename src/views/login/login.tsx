import React, { useEffect, useState } from 'react';
import { Text, View, Image, Alert } from 'react-native';

import ButtonForm from '../../components/buttonForm/buttonForm';
import InputForm from '../../components/inputForm/inputForm';
import stylesLogin from './login.styles';



const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  const login = ()=>{

    return new Promise((resolve, reject)=>{
      resolve(({id:1, email: 'admin', name: 'admin', pass: '123', token: 'token'}))
      
    }).then((value:any)=>{
      if ((email === '' || email === null || email === undefined) && (password === '' || password === null || password === undefined)) {
        Alert.alert('Empty params')
      }else if(email === value.email && password === value.pass){
        Alert.alert('Login succesfully', `Welcome, ${value.name}`);
        navigation.navigate('Body')
      }else if(email != value.email || password != value.pass){
        Alert.alert('User or password incorrect');
      }else {
        Alert.alert('Login error');
      }
    })
    /*const res = db('admin', '123');
    console.log(res.catch((value)=>{value.email}))
     else if (email === 'admin' && password === '123') {
      Alert.alert('Login succesfully')
      
    } else {
      
    }*/
  }

  useEffect(()=>{
    
  },[])

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
          <InputForm text={'Email...'} type={'email-address'} changed={setEmail} secure={false} />
          <InputForm text={'Password...'} type={'default'} changed={setPassword} secure={true} />
          <Text style={stylesLogin.textPassword}>Forgot your password?</Text>

          <View style={{ alignItems: 'center' }}>
            <ButtonForm text={'Login'} pressed={() => { login() }} />
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
