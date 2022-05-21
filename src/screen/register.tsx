import React, { useState } from 'react';
import {TextInput, Text, View, TouchableOpacity, Image, Button } from 'react-native';




import stylesBtn from '../Style/button';
import stylesImg from '../Style/image';
import stylesText from '../Style/text';
import stylesView from '../Style/view';
import stylesInp from '../Style/input';
import stylesCont from '../Style/container';


const Register = () => {


  return (
    
    <View style={stylesCont.container}>
      <View style={stylesView.viewImg}>
        <Image
          source={{
            uri: 'https://redista.com/wp-content/uploads/Vehiculo-sustitucion-1.png',
          }}
          style={stylesImg.img}
        />
        <Text style={stylesText.textTitle}>Create an account</Text>
      </View>

      <View style={stylesView.viewRegister}>
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Name..."
          style={stylesInp.resgisterUs}
        />
        <TextInput
          placeholderTextColor="#fff"
          placeholder="LastName..."
          style={stylesInp.resgisterUs}
        />
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Email..."
          style={stylesInp.resgisterUs}
          keyboardType={'email-address'}
        />
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Number..."
          style={stylesInp.resgisterUs}
          keyboardType={'phone-pad'}
        />
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Password..."
          style={stylesInp.resgisterInput}
          secureTextEntry
        />
      </View>

        <TouchableOpacity style={stylesBtn.btnLogin}>
          <Text style={stylesText.text}>Register</Text>
        </TouchableOpacity>
      
          <View>
          </View>   
    </View>
  );
  

};

export default Register;
