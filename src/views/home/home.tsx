import React, { useEffect, useState } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import style from './home.styles'



const Body = () => {
  return (
      <View>
        <Text style={style.title}>Welcome to our app!</Text>
      </View>
  );
};


export default Body;
