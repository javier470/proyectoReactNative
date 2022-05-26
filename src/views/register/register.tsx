import React from 'react';
import { Text, View, Image, } from 'react-native';

import ButtonForm from '../../components/buttonForm/buttonForm';
import InputForm from '../../components/inputForm/inputForm';
import stylesRegister from './register.styles';


const Register = () => {


  return (

    <View style={stylesRegister.container}>
      <View style={stylesRegister.viewImg}>
        <Image
          source={{
            uri: 'https://redista.com/wp-content/uploads/Vehiculo-sustitucion-1.png',
          }}
          style={stylesRegister.img}
        />
        <Text style={stylesRegister.textTitle}>Create an account</Text>
      </View>

      <View style={stylesRegister.viewRegister}>
        <View style={stylesRegister.viewDouble}>
          <InputForm text={'Name...'} type={'default'} secure={false} />
          <InputForm text={'Last name...'} type={'default'} secure={false} />
        </View>
        <View style={stylesRegister.viewDouble}>
          <InputForm text={'Email...'} type={'email-address'} secure={false} />
          <InputForm text={'Number...'} type={'phone-pad'} secure={false} />
        </View>
        <View style={stylesRegister.viewOne}>
          <InputForm text={'Password...'} type={'default'} secure={true} />
        </View>


      </View>

      <View style={{ alignItems: 'center' }}>
        <ButtonForm text={'Register'} />
      </View>

      <View>
      </View>
    </View>
  );


};

export default Register;
