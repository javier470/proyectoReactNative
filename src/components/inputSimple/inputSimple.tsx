import { TextInput } from 'react-native'
import stylesInput from './inputSimple.style'
import React from 'react'
import Color from '../../res/colors/colors'

const InputSimple = ({ text, changed}) => {

    return (
        <TextInput style={stylesInput.input} placeholder={text} onPressIn={() => {}} onChangeText={changed} returnKeyLabel={Color.pink}/>
    );


}

export default InputSimple;