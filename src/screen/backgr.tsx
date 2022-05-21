import React from 'react';

import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';

import stylesBgr from '../Style/backgrImg';
import stylesView from '../Style/view';

const Backgr = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View>
            <Image style={{width: windowWidth, height: windowHeight, opacity: 0.5}} blurRadius={10} source={require('../img/bk.png')}/>
        </View>
    )

}

export default Backgr;