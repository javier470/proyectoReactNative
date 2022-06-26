import React from 'react';
import {Image, View} from 'react-native';

const imagenBanderas = () => {
  return (
    <View>
      <Image
        source={require('../../res/img/facebookLogo.png')}
        style={{width: 10, height: 10}}
      />
    </View>
  );
};

export default {
    imagenBanderas,
  icDropDown: require('../../res/img/f.png'),
  banderaGuate: require('../../res/img/banderaGuate.png'),
};
