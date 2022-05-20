import React from 'react';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';

import stylesBtn from '../Style/button';
import stylesImg from '../Style/image';
import stylesText from '../Style/text';
import stylesView from '../Style/view';

const Register = () => {
  return (
    <View>
        <View style={stylesView.viewImg}>
        <Image
            source={{
              uri: 'https://redista.com/wp-content/uploads/Vehiculo-sustitucion-1.png',
            }}
            style={stylesImg.img}
          />
        </View> 
    </View>
  );
};

export default Register;