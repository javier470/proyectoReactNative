import { TextInput } from 'react-native'
import stylesInp from './inputNumber.style'
import React from 'react'

const InputNumber = () => {
    return (
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Number..."
          style={stylesInp.resgisterUs}
          keyboardType={'phone-pad'}
        />
    );
}

export default InputNumber;