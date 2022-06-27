import { TextInput } from 'react-native'
import stylesInp from './inputForm.style'
import React from 'react'
import Color from '../../res/colors/colors'

const InputForm = ({text, type, secure, changed, length}) => {
    
    return (
        <TextInput
            placeholderTextColor={Color.white}
            placeholder={text}
            onChangeText={changed}
            style={stylesInp.inputContainer}
            keyboardType={type}
            secureTextEntry={secure}
            maxLength = {length}
        />
    );


}

export default InputForm;

