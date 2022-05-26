import { TextInput } from 'react-native'
import stylesInp from './inputForm.style'
import React from 'react'
import Color from '../../res/colors/colors'

const InputForm = ({text, type, secure}) => {
    
    return (
        <TextInput
            placeholderTextColor={Color.white}
            placeholder={text}
            style={stylesInp.resgisterUs}
            keyboardType={type}
            secureTextEntry={secure}
        />
    );


}

export default InputForm;

