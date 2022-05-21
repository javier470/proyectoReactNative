import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

import stylesBtn from '../Style/button';
import stylesImg from '../Style/image';
import stylesText from '../Style/text';
import stylesView from '../Style/view';

import Backgr from './backgr';
const Welcome = () => {
  return (
    <>
      <Backgr />
      <SafeAreaView style ={{position: 'absolute'}} >
        <Text style = {{color: 'white', fontSize: 40,}}>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      </SafeAreaView>
    </>
  );
};

export default Welcome;
