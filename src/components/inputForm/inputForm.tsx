import { TextInput } from 'react-native'
import stylesInp from './inputForm.style'
import React from 'react'

const InputEmail = () => {
    return (
        <TextInput
            placeholderTextColor="#fff"
            placeholder="Email..."
            style={stylesInp.resgisterUs}
            keyboardType={'email-address'}
        />
    );


}

export default InputEmail;

