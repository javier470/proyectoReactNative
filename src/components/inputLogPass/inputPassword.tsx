import { TextInput } from 'react-native'
import stylesInp from './inputPassword.style'
import React from 'react'

const InputPassword = () => {
    return (
        <TextInput
            placeholderTextColor="#fff"
            placeholder="Password..."
            style={stylesInp.loginInput}
            secureTextEntry />
    );


}

export default InputPassword;