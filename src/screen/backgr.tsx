import React from 'react';

import { View, Image } from 'react-native';

import stylesBgr from '../Style/backgrImg';
import stylesView from '../Style/view';

const Backgr = () => {
    return (
        <View>
            <View style ={stylesView.viewBackgr}>
                <View style={{backgroundColor: 'red', flex:1}}>

                </View>
            </View>
        </View>
    )
    
}

export default Backgr;