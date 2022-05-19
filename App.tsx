/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';


const App = () => {

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View >

          <View style={styles.loginView}>
            <Text style={styles.textLogin}>Usuario</Text>
            <TextInput placeholder='Usuario...' style={styles.loginInput}></TextInput>
            <Text style={styles.textLogin}>Contraseña</Text>
            <TextInput placeholder='Contraseña...' style={styles.loginInput}></TextInput>
            <TouchableOpacity style={styles.btnLogin}><Text>Login</Text></TouchableOpacity>
          </View>

        </View>
        </ScrollView>
        
      </SafeAreaView>
        
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253239',
  },
  loginView: {
    margin: 7
  },
  textLogin: {
    color: '#BEDFEA'
  },
  loginInput: {
    backgroundColor: '#fff'
  },
  btnLogin: {
    backgroundColor: '#82C586',
    borderRadius: 100,
    margin: 20,
    padding: 10,
    alignItems: 'center',
  }
});

export default App;
