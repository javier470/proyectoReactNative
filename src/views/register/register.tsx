import React from 'react';
import { Text, View, Image, } from 'react-native';

import ButtonForm from '../../components/buttonForm/buttonForm';
import InputEmail from '../../components/inputForm/inputForm';
import InputName from '../../components/inputName/inputName';
import InputNumber from '../../components/inputNumber/inputNumber';
import InputPassword from '../../components/inputPassword/inputPass';
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
        <InputName placeholder={'Name...'}/>
        <InputName placeholder={'Last name...'}/>
        <InputEmail />
        <InputNumber />
        <InputPassword />
        
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
