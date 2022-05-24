import { TextInput } from 'react-native'
import stylesInp from './inputName.style'
import React from 'react'

const InputName = ({placeholder}) => {
    return (
        <TextInput
          placeholderTextColor="#fff"
          placeholder={placeholder}
          style={stylesInp.resgisterUs}
        />
    );
}

export default InputName;