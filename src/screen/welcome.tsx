import React from 'react';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';

import stylesBtn from '../Style/button';
import stylesImg from '../Style/image';
import stylesText from '../Style/text';
import stylesView from '../Style/view';

const Welcome = () => {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/51/ff/65/51ff65ef3ff1f2c7147eff36f89c5c78.jpg',
          }}
          style={stylesImg.imgHeader}
        />
        <Text style={stylesText.textWelcome}>
          Hello! What do you want to do?
        </Text>
      </View>
      <View style={stylesView.viewBody}>
        <TouchableOpacity style={stylesBtn.btnWelcome}>
          <Text style={stylesText.text}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={stylesText.text}> Or </Text>
        <TouchableOpacity style={stylesBtn.btnWelcome}>
          <Text style={stylesText.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
