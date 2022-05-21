/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 * 
 * 
 * -----------------No hay Navegación todavia-----------------
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Login from './src/screen/login';
import stylesCont from './src/Style/container';
import Welcome from './src/screen/welcome';
import Register from './src/screen/register';
import Backgr from './src/screen/backgr';

const App = () => {
  return (
    <SafeAreaView style={stylesCont.container}>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
/**/
