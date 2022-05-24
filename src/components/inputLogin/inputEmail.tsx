import { TextInput } from 'react-native'
import stylesInp from './inputEmail.style'
import React from 'react'

const InputEmail = () => {
    return (
        <TextInput
            placeholderTextColor="#fff"
            placeholder='Email...'
            style={stylesInp.loginInput}
            keyboardType={'email-address'}
        />
    );


}

export default InputEmail;