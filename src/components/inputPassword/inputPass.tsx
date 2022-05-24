import { TextInput } from 'react-native'
import stylesInp from './inputPass.style'
import React from 'react'

const InputPassword = () => {
    return (
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Password..."
          style={stylesInp.resgisterInput}
          secureTextEntry
        />
    );


}

export default InputPassword;